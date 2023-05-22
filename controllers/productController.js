const Product = require('../models/product');

module.exports.products = async (req,res)=>{
    try{
        const product = await Product.find({})
        if(product.length === 0 ){
            return res.status(400).json({
                message : "No products found"
            });
        }
        return res.status(200).json({
            data : {
                product : product
            },
            message : "Connected Router and controller to app"
        });
    }catch(err){
        return res.status(500).json({
            message : "Error in fetching the products"
        });
    }
};