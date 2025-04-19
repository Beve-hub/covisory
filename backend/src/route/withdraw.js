const { Router } = require('express');
const router = Router();
const Withdraw = require('../model/WithdrawSchema');


// Cache for bank list
let bankList = []

router.post('/withdraw', async(req, res) => {
 const {userId, amount, currency, accountNumber, accountName} = req.body
 try {
    const withdrawal = new Withdrawal({
        userId: req.user._id,
        amount,
        currency: 'NGN',
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