const { Router } = require('express');
const router = Router();
const Withdraw = require('../model/WithdrawSchema');
const verifyToken = require('./verifyToken');
const nigerianBanks = require('../utils/banks');
const Conversion = require('../model/Conversion');
const Wallet = require('../model/Wallet')



router.post('/withdraw',verifyToken, async(req, res) => {

 const {amount, currency = 'NGN', accountNumber, accountName, bankName, transactionId} = req.body

 if (!amount || !accountName || !accountNumber || !bankName) {
  return res.status(400).json({error: 'missing input field'})
 }

 const availableBank = nigerianBanks.some(bank => bank.name === bankName)
 if (!availableBank) {
  return res.status(400).json({error: 'bank name is missing'})
 }

 if (currency !== 'NGN') {
    return res.status(400).json({error: 'withdawal only allow NGN'})
 }

 try {
  const wallet = await Wallet.findOne({userId: req.user._id});
  if (!wallet || wallet.balanceNGN < amount){
    return res.status(400).json({error: 'Insufficient balance'})
  }

  wallet.balanceNGN -= amount;
  wallet.updatedAt = new Date();
  await wallet.save();

  
    const withdrawal = new Withdraw({
        userId: req.user._id,
        amount,
        currency,
        transactionId,
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

module.exports = router;