const { Router } = require('express');
const router = Router();
const Deposit = require('../model/DepositSchema')
const verifyToken = require('./verifyToken');



router.post('/deposit',verifyToken, async(req, res) => {
    const { email, amount, currency} = req.body;
    const userId = req.user._id;
    try {
        const deposit = await Deposit.create({
            userId,
            amount,
            currency,
        });

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