const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/E-Commerce_Api_project');

const db =  mongoose.connection;

db.on('error',console.error.bind(console,'Error in connecting to MongoDB'));

db.once('open',()=>{
    console.log('MongoDB is connected');
});

module.exports = db;