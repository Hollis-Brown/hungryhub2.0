const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');
const verifyToken = require('../auth/jwtStrategy');

// Register a new user
router.post('/register', customerController.registerUser);

// Login user
router.post('/login', customerController.loginUser);

// Get user details
router.get('/:id', verifyToken, customerController.getUserDetails);

// Update user details
router.put('/:id', verifyToken, customerController.updateUserDetails);

module.exports = router;