const { Router } = require('express');
const User = require('../model/User'); 
const { hashPassword, comparePasswords } = require('../utils/helper');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const router = Router();
const emailValidator = require('email-validator');
const UserOTPVerification = require('../model/UserOtpVerify')
const sendOTPVerificationEmail = require('../utils/sendOTP');



// Register a new user
router.post('/register', async (req, res) => {
    try {
        const { firstName,lastName,userName,address, country, email, password } = req.body;
        if (!firstName|| !lastName || !userName || !address || !country || !email || !password) {
            return res.status(400).json({ message: 'Please fill all fields' });
        }
        if (!/^[a-zA-Z\s]+$/.test(firstName) || !/^[a-zA-Z\s]+$/.test(lastName)) {
            return res.status(400).json({ message: 'Invalid name format' });
        }

        if (!/^(?=(.*[a-zA-Z]){3,})[a-zA-Z0-9\s]+$/.test(userName)) {
            return res.status(400).json({ message: 'Username must contain at least 3 letters' });
        }

        if (!emailValidator.validate(email)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }
        if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
            return res.status(400).json({ message: 'Password must meet complexity requirements' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password and create the user
        const hashedPassword = await hashPassword(password);
        const newUser = new User({ firstName,lastName,userName,address, country, email, password: hashedPassword, verified: false });
        await newUser.save();
        
        //send otp
        await sendOTPVerificationEmail(newUser);
        return res.status(201).json({ message: 'User registered successfully. Verification OTP sent to email.' });

        
       
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
});


// Route to get all users
router.get('/register', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Login a user
router.post('/login', async (req, res) => {
    try {
        const { userName, email, password } = req.body;
        const user = await User.findOne({  $or: [{ email }, { userName }] });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isMatch = await comparePasswords(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        // Ensure TOKEN_SECRET is set
        if (!process.env.TOKEN_SECRET) {
            return res.status(500).json({ message: 'Server error: Missing TOKEN_SECRET' });
        }

        // Generate token
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
        res.header('auth-token', token).send(token)
        // Send token in JSON format
        return res.json({ message: 'User logged in successfully', token });


        if(!user.verified) {
            await sendOTPVerificationEmail(user);
            return res.status(403).json({message: 'Please verify your email. OTP has been sent'})
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
});

//verify OTP 
router.post('/verifyOTP', async (req,res) => {
    try {
        const {userId, otp} = req.body
        if (!userId || !otp) {
            return res.status(404).json({ message: 'User not found' })
        }else {
            const UserOTPVerificationRecord = await UserOTPVerification.find({userId});
            if (UserOTPVerificationRecord.length <= 0) {
                return res.status(404).json({message:"Account record doesn't exist or has been verified already. Please register or login."})
            } else{

            const {expiresAt} = UserOTPVerificationRecord[0];
            const hashedOTP = UserOTPVerificationRecord[0].otp;

            if (expiresAt < Date.now()) {
                // OTP has expired
                await UserOTPVerification.deleteMany({userId});
                return res.status(404).json({message: 'Code has expired. Please request again.'});
            }else {
                const validOTP = await bcrypt.compare(otp, hashedOTP);

                if(!validOTP){
                    return res.status(404).json({message: 'Invalid code passed. check your inbox'})
                } else {
                    //success
                    await User.updateOne({_id: userId}, { verified: true});
                    await UserOTPVerification.deleteMany({userId});
                    res.json({
                        message: 'Email verified successfully',
                        status: 'User email verified successfully'
                    })
                }
            }
        }
        }
    }catch(err){
        console.error('Error verifying code :', error);
        res.status(500).json({message: 'Error verifying code'});
    }
})


module.exports = router;
