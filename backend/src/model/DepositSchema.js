const mongoose = require('mongoose');

const depositSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        enum: ['NGN', 'BTC', 'USDT', 'ETH', 'BNB'],
        required: true
    },
    network: {
        type: String,
        enum: ['Bitcoin', 'ERC20', 'TRC20', 'BEP20', 'TON', 'TRON', 'Paystack'],
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'failed'],
        default: 'pending'
      },
    transactionHash: String, // For crypto deposits
    paystackReference: String, // For Naira deposits
    walletAddress: String, // For crypto deposits
    createdAt: {
      type: Date,
      default: Date.now
    }
})

module.exports = mongoose.model('Deposit', depositSchema);