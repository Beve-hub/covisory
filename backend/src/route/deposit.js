const { Router } = require('express');
const router = Router();
const Deposit = require('../model/DepositSchema')
const {initializeTransaction} = require('../utils/payStackConfig');


router.post('/deposit', async({req, res}) => {
    const {userId, email, amount, currency} = req.body;

    try {
        if(currency === "NGN") {
            const initRes = await initializeTransaction({email, amount});

            const deposit = await Deposit.create({
                userId,
                amount,
                currency,
                network: 'Paystack',
                reference: initRes.data.reference,
            });

            await deposit.save();

            return res.status(200).json({
                message: "Paystack payment initiated",
                authorization_url: initRes.data.authorization_url,
                reference: initRes.data.reference,
                deposit
            });
        }else {
            const deposit = await Deposit.create({userId, amount, currency, network});
            res.status(201).json(deposit);
        }
    }catch(error){
        res.status(400).json({error: error.message})
    }
})


router.get('/deposit', async(req, res) => {
    const deposit = await Deposit.find();
    res.json(deposit);
})
