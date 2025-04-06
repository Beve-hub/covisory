const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserOtpVerifySchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
    verified: {
        type: Boolean,
        default: false,
    },
    expiresAt: {
        type: Date,
        default: Date.now,
        expires: 60 * 5,
        required: true,
    },
    
});

const userOtpVerify = mongoose.model(
    "userOTPVerification",
    UserOtpVerifySchema
);

module.exports = userOtpVerify;