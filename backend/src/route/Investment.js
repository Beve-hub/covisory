// routes/investment.js
const { Router } = require('express');
const router = Router();
const Wallet = require('../model/Wallet');
const InvestmentBalance = require('../model/investmentBalanceSchema');
const Investment = require('../model/InvestmentSchema');
const verifyToken = require('./verifyToken');

const planConfig = {
  Emergency: { min: 10, max: 50000, duration: 30, profitPercent: 0.4 },
  Standard: { min: 100, max: 5000, duration: 60, profitPercent: 0.6 },
  Prime: { min: 5001, max: 50000, duration: 90, profitPercent: 0.8 },
  Shareholder: { min: 50000, max: 500000, duration: 180, profitPercent: 1.2 },
};

const validCurrencies = ['NGN', 'USD', 'EUR', 'GBP'];

router.post('/buy', verifyToken, async (req, res) => {
  try {
    const { plan, amount, currency } = req.body;
    const userId = req.user._id;

    if (!planConfig[plan]) return res.status(400).json({ error: 'Invalid plan' });
    if (!validCurrencies.includes(currency)) return res.status(400).json({ error: 'Invalid currency' });

    const { min, max, duration, profitPercent } = planConfig[plan];
    if (amount < min || amount > max)
      return res.status(400).json({ error: `Amount must be between ${min} and ${max}` });

    const wallet = await Wallet.findOne({ userId });
    const balanceField = `balance${currency}`;
    if (!wallet || wallet[balanceField] < amount)
      return res.status(400).json({ error: 'Insufficient wallet balance' });

    const balanceKey = `${plan}_${currency}`; // <-- dynamic balance key
    const existing = await Investment.findOne({ userId, plan, currency, status: 'active' });
    if (existing)
      return res.status(400).json({ error: `Active investment exists for ${plan} in ${currency}` });

    wallet[balanceField] -= amount;
    await wallet.save();

    let invBal = await InvestmentBalance.findOne({ userId });
    if (!invBal) invBal = new InvestmentBalance({ userId });

    const currentBalance = invBal.balances.get(balanceKey) || 0;
    invBal.balances.set(balanceKey, currentBalance + amount);
    invBal.updatedAt = new Date();
    await invBal.save();

    const startDate = new Date();
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + duration);

    const investment = new Investment({
      userId,
      plan,
      amount,
      currency,
      dailyProfit: (amount * profitPercent) / 100,
      duration,
      referralCommission: 0,
      startDate,
      endDate,
      status: 'active'
    });

    await investment.save();

    res.status(201).json({ message: 'Investment created successfully', investment });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/sell', verifyToken, async (req, res) => {
  try {
    const { currency, plan } = req.body;
    const userId = req.user._id;

    if (!planConfig[plan]) return res.status(400).json({ error: 'Invalid plan' });
    if (!validCurrencies.includes(currency)) return res.status(400).json({ error: 'Invalid currency' });

    const investment = await Investment.findOne({
      userId,
      plan,
      currency,
      status: 'active',
      capitalReturned: false
    });

    if (!investment)
      return res.status(404).json({ error: 'Active investment not found' });

    const wallet = await Wallet.findOne({ userId });
    const invBal = await InvestmentBalance.findOne({ userId });
    if (!wallet || !invBal)
      return res.status(404).json({ error: 'Wallet or investment balance not found' });

    const balanceKey = `${plan}_${currency}`;
    const currentBalance = invBal.balances.get(balanceKey) || 0;

    if (currentBalance < investment.amount)
      return res.status(400).json({ error: 'Insufficient investment balance' });

    wallet[`balance${currency}`] += investment.amount;
    wallet.updatedAt = new Date();

    invBal.balances.set(balanceKey, currentBalance - investment.amount);
    invBal.updatedAt = new Date();

    investment.status = 'completed';
    investment.capitalReturned = true;
    investment.transactions.push({
      date: new Date(),
      amount: investment.amount,
      type: 'capital'
    });

    await wallet.save();
    await invBal.save();
    await investment.save();

    res.status(200).json({
      message: 'Investment sold, capital returned',
      walletBalance: wallet[`balance${currency}`],
      investmentBalance: invBal.balances.get(balanceKey)
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/balance', verifyToken, async (req, res) => {
  try {
    const invBal = await InvestmentBalance.findOne({ userId: req.user._id });
    if (!invBal) return res.status(404).json({ error: 'No investment balance found' });

    res.status(200).json({
      balances: Object.fromEntries(invBal.balances),
      updatedAt: invBal.updatedAt
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch investment balances' });
  }
});

module.exports = router;
