// Import the required modules
const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config(); // Load environment variables

// Set the port number
const port = process.env.PORT || 8000;

// Initialize the Express application
const app = express();

// Enable CORS to handle requests from different origins

// Configure CORS
app.use(
  cors({
    origin: [
      "http://localhost:3000", // Allow local frontend
      "https://e-commerce-oy6q.onrender.com", // Allow deployed frontend
    ],
    methods: ["GET", "POST", "PATCH", "DELETE"], // Allow specific HTTP methods
    credentials: true, // Optional: Allow cookies/headers if needed
  })
);

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to the database
require("./config/mongoose"); // Ensures database connection is established

// Import and use the product router for API routes
const productRouter = require("./routers/product");
app.use("/api", productRouter); // Prefix all product-related routes with '/api'

// Serve React's static files from the "dist" directory
const distPath = path.join(__dirname, "dist");
app.use(express.static(distPath));

// Catch-all route to serve React's index.html for non-API routes
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

// Start the server and listen on the specified port
app.listen(port, (err) => {
  if (err) {
    console.error(`Failed to start the server: ${err}`);
  } else {
    console.log(`Server is running at http://localhost:${port}`);
  }
});

// Log all incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error occurred:", err.message);
  res.status(500).json({ error: "An internal server error occurred" });
});
