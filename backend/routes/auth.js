const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');

const router = express.Router();

// @desc    Register a new user
// @route   POST /api/auth/register
router.post('/register', registerUser);

// @desc    Login user & get token
// @route   POST /api/auth/login
router.post('/login', loginUser);

module.exports = router;
