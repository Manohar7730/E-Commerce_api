const Product = require('../models/product');

module.exports.products = (req,res)=>{
    res.status(200).json({
        message : "Connected Router and controller to app"
    });
};