// routes/conversion.js
const { Router } = require('express');
const router = Router();
const Conversion = require('../model/Conversion');
const { getExchangeRate } = require('../utils/exchangeRate');
const Wallet = require('../model/Wallet');
const verifyToken = require('./verifyToken');

const validCurrencies = ['NGN','USD', 'EUR', 'GBP', 'JPY', 'BTC', 'ETH']; // example

router.post('/convert', verifyToken, async (req, res) => {
  try {
    const { fromCurrency, toCurrency, fromAmount } = req.body;
    const userId = req.user._id;

    if (!validCurrencies.includes(fromCurrency) || !validCurrencies.includes(toCurrency)) {
      return res.status(400).json({ error: 'Invalid currency' });
    }

    if (fromCurrency === toCurrency) {
      return res.status(400).json({ error: 'Cannot convert same currency' });
    }

    const rate = await getExchangeRate(fromCurrency, toCurrency);
    if (!rate) {
      return res.status(400).json({ error: 'Exchange rate not found' });
    }

    const fee = fromAmount * 0.002;
    const toAmount = (fromAmount - fee) * rate;

    const fromBalanceField = `balance${fromCurrency}`;
    const toBalanceField = `balance${toCurrency}`;

    const wallet = await Wallet.findOne({ userId });

    if (!wallet || wallet[fromBalanceField] === undefined) {
      return res.status(400).json({ error: 'Currency not available in wallet' });
    }

    if (wallet[fromBalanceField] < fromAmount) {
      return res.status(400).json({ error: 'Insufficient balance' });
    }

    const conversion = new Conversion({
      userId,
      fromAmount,
      fromCurrency,
      toAmount,
      toCurrency,
      rate,
      fee,
      status: 'pending'
    });

    await conversion.save();

    // Process conversion directly here
    wallet[fromBalanceField] -= fromAmount;
    wallet[toBalanceField] = (wallet[toBalanceField] || 0) + toAmount;
    await wallet.save();

    conversion.status = 'completed';
    await conversion.save();

    res.status(201).json({
      message: 'Conversion completed',
      conversion
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/convert', verifyToken, async (req, res) => {
  try {
    const conversion = await Conversion.find({ userId: req.user._id }).sort({ createdAt: -1 });
    res.status(200).json(conversion);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
