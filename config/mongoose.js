// Import the Mongoose module
const mongoose = require('mongoose');

// Connect to the MongoDB database
mongoose.connect('mongodb://127.0.0.1:27017/E-Commerce_Api_project');

// Get the default connection
const db = mongoose.connection;

// Handle connection error
db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

// Once the connection is open, log a success message
db.once('open', () => {
    console.log('MongoDB is connected');
});

// Export the database connection
module.exports = db;