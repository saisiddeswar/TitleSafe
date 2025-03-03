const User = require('../models/usermodel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();  // Ensure you have dotenv configured

const JWT_SECRET = process.env.JWT_SECRET || 'MY_SECRET_TOKEN';

// 🟢 Login Function
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required.' });
        }

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found.' });
        }

        // Check if the password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }

        // Generate JWT token
        const payload = { username: user.username, email: user.email };
        const jwtToken = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

        // Set token in a cookie
        res.cookie('jwtToken', jwtToken, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });

        res.status(200).json({ message: 'Login successful', jwtToken });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// 🟢 Signup Function
const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Username, email, and password are required.' });
        }

        // Check if username or email already exists
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).json({ message: 'Username or email already exists.' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const user = await User.create({ username, email, password: hashedPassword });

        // Generate JWT token
        const payload = { username: user.username, email: user.email };
        const jwtToken = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

        // Set token in a cookie
        res.cookie('jwtToken', jwtToken, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });

        res.status(201).json({ message: 'User registered successfully', jwtToken });
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { login, signup };
