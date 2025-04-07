const UserOTPVerification = require('../model/UserOtpVerify');
const sendVerifiedEmail = require('./mailer');
const otpGenerator = require('./otp');
const bcrypt = require('bcryptjs');


const sendOTPVerificationEmail = async(user) => {
    const otpCode = otpGenerator();
    const hashedOTP = await bcrypt.hash(otpCode,10);

    const newOTPVerification = new UserOTPVerification({
        userId: user._id,
        otp: hashedOTP,
        expiresAt: Date.now() + 300000
    });

    await newOTPVerification.save();
    await sendVerifiedEmail(user.email, otpCode)
};


module.exports = sendOTPVerificationEmail;