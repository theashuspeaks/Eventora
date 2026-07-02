const express = require('express');
const router = express.Router();
const { register, login, verifyOTP } = require('../controllers/authController');

// Register
router.post('/register', register);  //ComeToRoute, FollowThisFunction

// Login
router.post('/login', login);

// Verify-OTP
router.post('/verify-otp', verifyOTP);   
 

module.exports = router;
