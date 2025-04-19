const { Router } = require('express');
const router = Router();
const Conversion = require('../model/Conversion');
const axios = require('axios');
const {getExchangeRate} = require('../utils/exchangeRate')


router.post('/convert', async(req, res) => {
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

async function getExchangeRate(fromCurrency, toCurrency) {
    try {
        const url = `${EXCHANGE_API_URL}/${fromCurrency}/${toCurrency}`;
        const {data} = await axios.get(url);
        if (data&& data.conversion_rate) return data.conversion_rate
        return null;
 } catch (error) {
    console.error('Exchange rate error:', error);
    return null
 }   
}
async function getUserBalance(userId, currency) {
    return 1000; // Mocked balance
  }
  
  async function processConversion(userId, fromAmount, fromCurrency, toAmount, toCurrency) {

    return true;
  }