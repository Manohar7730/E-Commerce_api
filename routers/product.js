// Import the Express module
const express = require("express");

// Create a new router instance
const router = express.Router();

// Import the product controller
const productController = require("../controllers/productController");

// Define a route for handling GET and post requests
router.get("/", productController.products);
router.get("/:id", productController.product);
router.post("/create", productController.create);
router.delete("/delete/:id", productController.delete);
router.patch("/:id/update_quantity", productController.update);

// Export the router
module.exports = router;
