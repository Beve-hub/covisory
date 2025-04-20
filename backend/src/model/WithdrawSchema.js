const mongoose = require('mongoose');

const withdrawalSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  amount: {
    type: Number,
    required: true,
    min: [100, 'Minimum withdrawal amount is 100 NGN']
  },
  currency: {
    type: String,
    required: true,
    enum: ['NGN'],
    default: 'NGN'
  },
  bankDetails: {
    accountNumber: {
      type: String,
      required: [true, 'Account number is required'],
      validate: {
        validator: function(v) {
          return /^\d{10}$/.test(v);
        },
        message: props => `${props.value} is not a valid Nigerian account number!`
      }
    },
    accountName: {
      type: String,
      required: [true, 'Account name is required']
    },
    bankName: {
      type: String,
      required: true
    }
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'success', 'failed'],
    default: 'pending'
  },
  transferCode: {
    type: String
  },
  failureReason: {
    type: String
  },
  transactionId:{
    type: String,
    required: true,
    unique: true
   },
  reference: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date
  }
}, {
  timestamps: true
});
function generateTransactionId(length = 15) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';
  for (let i = 0; i < length; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}

// Pre-save hook to update timestamp
withdrawalSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  if (!this.transactionId) {
    this.transactionId = generateTransactionId();
  }
  next();
});

module.exports = mongoose.model('Withdrawal', withdrawalSchema);