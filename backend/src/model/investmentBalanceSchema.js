// models/InvestmentBalance.js
const mongoose = require('mongoose');

const investmentBalanceSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  NGN: { type: Number, default: 0 },
  USD: { type: Number, default: 0 },
  EUR: { type: Number, default: 0 },
  GBP: { type: Number, default: 0 },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('InvestmentBalance', investmentBalanceSchema);
