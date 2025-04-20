const mongoose = require('mongoose');
const walletSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balanceNGN: {
        type: Number,
        default: 0
    }, 
    balanceUSD: {
        type: Number,
        default: 0
      },
      balanceEUR: {
        type: Number,
        default: 0
      },
      balanceGBP: {
        type: Number,
        default: 0
      },
      updatedAt: {
        type: Date,
        default: Date.now
      }
})


module.exports = mongoose.model('Wallet', walletSchema);
  