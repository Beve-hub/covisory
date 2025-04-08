const mongoose = require('mongoose');

const conversionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    fromAmount: {
        type: Number,
        required: true
    },
    fromCurrency: {
        type: String,
        enum: ['NGN', 'BTC', 'USDT', 'ETH', 'BNB'],
        required: true
    },
    toAmount: {
        type: Number,
        required: true
    },
    toCurrency: {
        type: String,
        enum: ['NGN', 'BTC', 'USDT', 'ETH', 'BNB'],
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
    fee: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'failed'],
        default: 'pending'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Conversion', conversionSchema);