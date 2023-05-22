const Product = require('../models/product');

module.exports.products = async (req, res) => {
    try {
        const products = await Product.find()
        if (products.length === 0) {
            return res.status(400).json({
                message: "No products found"
            });
        }
        return res.status(200).json({
            data: {
                products: products
            },
            message: "Connected Router and controller to app"
        });
    } catch (err) {
        return res.status(500).json({
            message: "Error in fetching the products"
        });
    }
};

module.exports.create = async (req, res) => {
    try {
        if (!req.body.name || !req.body.quantity) {
            return res.status(400).json({
                message: "please enter name and quantity"
            });
        }
        const newProduct = await Product.create(req.body);
        return res.status(201).json({
            data: {
                product: newProduct
            },
            message: "Product Created successfully"
        })
    } catch (err) {
        return res.status(500).json({
            data: {
                err: err
            },
            message: "Error in Creating the product"
        });
    }
};

module.exports.delete = async (req, res) => {
    try {
        const productId = await req.params.id;
        const product = await Product.findByIdAndDelete(productId);
        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }
        return res.status(200).json({
            message : "deleted successfully"
        })
    } catch (err) {
        return res.status(500).json({
            data: {
                err: err
            },
            message: "Error in deleting the product"
        });
    }
}