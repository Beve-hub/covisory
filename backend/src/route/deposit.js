const { Router } = require('express');
const router = Router();
const Deposit = require('../model/DepositSchema')
const verifyToken = require('./verifyToken');
const wallet = require('../model/Wallet')



router.post('/deposit',verifyToken, async(req, res) => {
    const { amount, currency = 'NGN',reference} = req.body;
    const userId = req.user._id;
    try {
        const deposit = await Deposit.create({
            userId,
            amount,
            currency,
            reference
        });

        await wallet.findOneAndUpdate(
            { userId },
            {
              $inc: { balanceNGN: amount },
              $set: { updatedAt: new Date() }
            },
            { upsert: true }
          );

        res.status(201).json(deposit);
    }catch(error){
        res.status(400).json({error: error.message})
    }
})


router.get('/deposit', async(req, res) => {
    const deposit = await Deposit.find();
    res.json(deposit);
})


module.exports = router;