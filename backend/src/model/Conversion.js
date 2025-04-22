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
        enum: ['NGN', 'USD', 'EUR', 'GBP'],
        required: true
    },
    toAmount: {
        type: Number,
        required: true
    },
    transactionId: {
        type: String,
      },
    toCurrency: {
        type: String,
        enum: ['NGN','USD', 'EUR', 'GBP'],
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

function generateTransactionId(length = 20) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < length; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
  
  depositSchema.pre('save', function (next) {
    if (!this.transactionId) {
      this.transactionId = generateTransactionId();
    }
    next();
  });

module.exports = mongoose.model('Conversion', conversionSchema);