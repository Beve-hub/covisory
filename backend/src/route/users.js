const { Router } = require('express');
const User = require('../model/User'); 
const { hashPassword, comparePasswords } = require('../utils/helper');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const router = Router();
const emailValidator = require('email-validator');

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

        // Send OTP verification email
        await sendOTPVerification(newUser, res);

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
});


// Route to get all users
router.get('/', async (req, res) => {
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

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        res.header('auth-token', token);
        return res.json({ message: 'User logged in successfully', token });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
