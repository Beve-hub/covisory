const mongoose = require('mongoose');

const investmentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    plan: {
        type: String,
        enum: ['Emergency', 'Standard', 'Prime', 'Shareholder'],
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        enum: ['NGN', 'USD', 'EUR', 'GBP'],
        required: true
    },
    dailyProfit: {
        type: Number,
        required: true
    },
    duration: {
        type: Number, // in days
        required: true
    },
    referralCommission: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: Date,
    status: {
        type: String,
        enum: ['active', 'completed', 'cancelled'],
        default: 'active'
    },
    capitalReturned: {
        type: Boolean,
        default: false
    },
    transactions: [{
        date: Date,
        amount: Number,
        type: {
          type: String,
          enum: ['profit', 'referral', 'capital']
        }
    }]
})

module.exports = mongoose.model('InvestmentBalance', investmentSchema);
