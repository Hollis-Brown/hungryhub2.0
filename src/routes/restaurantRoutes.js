const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');
const verifyToken = require('../auth/jwtStrategy');

// Get all restaurants
router.get('/', restaurantController.getAllRestaurants);

// Add a new restaurant
router.post('/', verifyToken, restaurantController.addRestaurant);

// Update a restaurant
router.put('/:id', verifyToken, restaurantController.updateRestaurant);

// Delete a restaurant
router.delete('/:id', verifyToken, restaurantController.deleteRestaurant);

module.exports = router;