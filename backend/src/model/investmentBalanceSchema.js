// models/InvestmentBalance.js
const mongoose = require('mongoose');

const investmentBalanceSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  balances: { type: Map, of: Number,default: {} },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Investment', investmentBalanceSchema);
