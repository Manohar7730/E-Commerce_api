// Import the Express module
const express = require('express');

// Create a new router instance
const router = express.Router();

// Import the product controller
const productController = require('../controllers/productController');

// Define a route for handling GET requests to '/products'
router.get('/products', productController.products);
// Export the router
module.exports = router;