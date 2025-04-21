const { Router } = require('express');
const router = Router();
const Conversion = require('../model/Conversion');
const {getExchangeRate} = require('../utils/exchangeRate');
const Wallet = require('../model/Wallet');
const verifyToken = require('./verifyToken');



router.post('/convert',verifyToken, async(req, res) => {
    try {
        
    const { fromCurrency, toCurrency, fromAmount } = req.body;
    const userId = req.user._id;

    if (!validCurrencies.includes(fromCurrency) || !validCurrencies.includes(toCurrency)) {
        return res.status(400).json({ error: 'Invalid currency' });
    }

    if (fromCurrency === toCurrency) {
        return res.status(400).json({error: 'Cannot convert same currency'});
    }

    const rate = await getExchangeRate(fromCurrency, toCurrency);
    if(!rate) {
        return res.status(400).json({ error: 'Cannot convert same currency'});
    }

    const fee = fromAmount * 0.002;
    const toAmount = (fromAmount - fee ) * rate;

    const balance = await getUserBalance(userId, fromCurrency);
    if (balance < fromAmount) {
        return res.status(400).json({ error: "Insufficient balance"});
    }


    const fromBalanceField = `balance${fromCurrency}`;
    
    const wallet = await Wallet.findOne({userId: req.user._id});
    if (!wallet || wallet[fromBalanceField] < fromAmount) {
        return res.status(400).json({error: 'insufficient balance'})
    }

    if (!wallet || wallet[fromBalanceField] === undefined) {
        return res.status(400).json({error: 'Currency is missing or not define'})
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
    await processConversion(userId, fromAmount, fromCurrency, toAmount, toCurrency);

    conversion.status = 'completed';
    await conversion.save();

    res.status(201).json({
        message: 'Conversion completed',
        conversion
    })

} catch (error) {
    res.status(500).json({error: error.message})
}
})

router.get('/convert', async(req,res) => {
    try {
        const conversion = await Conversion.find({userId: req.user._id}). sort({ createdAt: -1});
        res.status(200).json(conversion);
    } catch (error) {
        res.status(500).json({ error: "Server error"})
    }
})




async function getUserBalance(userId, currency) {
    return 1000;
  }
  
  async function processConversion(wallet, fromAmount, fromCurrency, toAmount, toCurrency) {
    const fromBalanceField = `balance${fromCurrency}`;
    const toBalanceField = `balance${toCurrency}`;
    wallet[fromBalanceField] -= fromAmount;
    wallet[toBalanceField] = (wallet[fromBalanceField || 0]) + toAmount
    return true;
  }

  module.exports = router;