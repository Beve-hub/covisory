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
    transactionId: {
        type: String,
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

module.exports = mongoose.model('InvestmentBalance', investmentSchema);
