const { Router } = require('express');
const router = Router();
const Withdraw = require('../model/WithdrawSchema');
const verifyToken = require('./verifyToken');
const nigerianBanks = require('../utils/banks');



router.post('/withdraw',verifyToken, async(req, res) => {

 const {amount, currency = 'NGN', accountNumber, accountName, bankName} = req.body

 if (!amount || !accountName || !accountNumber || !bankName) {
  return res.status(400).json({error: 'missing input field'})
 }

 const availableBank = nigerianBanks.some(bank => bank.name === bankName)
 if (availableBank) {
  return res.status(400).json({error: 'bank name is missing'})
 }
 try {
    const withdrawal = new Withdraw({
        userId: req.user._id,
        amount,
        currency,
        bankDetails: {
          accountNumber,
          accountName,
          bankName
        },
        reference: `WDL-${Date.now()}`
      });

      await withdrawal.save();
    
 } catch (error) {
    res.status(400).json({error: error.message})
 }
})


router.get('/withdraw', async(req, res) => {
    const withdrawals = await Withdraw.find();
    res.json(withdrawals);
})