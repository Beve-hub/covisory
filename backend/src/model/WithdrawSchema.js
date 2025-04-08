const mongoose = require('mongoose')

const withdrawSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    amount: {
        type: Number,
        require: true
    }, 
    currency: {
        type: String,
        enum: ['NGN', 'BTC', 'USDT', 'ETH', 'BNB'],
        required: true
    },
    network: {
        type: String,
        enum: ['Bitcoin', 'ERC20', 'TRC20', 'BEP20', 'TON', 'TRON', 'Bank Transfer'],
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'failed'],
        default: 'pending'
      },
      bankDetails: {
        accountNumber: String,
        accountName: String
      },
      walletAddress: String, // For crypto withdrawals
      transactionHash: String,
      createdAt: {
        type: Date,
        default: Date.now
      }
});

module.exports = mongoose.model('Withdrawal', withdrawalSchema);