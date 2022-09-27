const Product = require('../models/productModel')
const ErrorHandler = require('../utils/errorHandler')
const ApiFeatures = require('../utils/apiFeatures')

// create product
exports.createProduct = async (req,res,next) => {
    try {
        const product = await Product.create(req.body)

        res.status(201).json({
            success:true,
            product
        })
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}

// update product by id
exports.updateProduct = async (req,res,next) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true,
            useFindAndModify:false
        })

        res.status(200).json({
            success:true,
            product
        })
        
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
}

// delete product by id
exports.deleteProduct = async (req,res,next) => {

    try {

        let product = await Product.findById(req.params.id)
        await product.remove()

        res.status(200).json({
            success:true,
            message:"Product delete successfully"
        })
        
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
  
}  

// get product details
exports.getProductDetails = async (req,res,next) => {

    try {
        let product = await Product.findById(req.params.id);

        res.status(200).json({   
            success:true,
            product
        })
        
    } catch (error) {
        return next(new ErrorHandler("Product not found", 404));
    }

}  

// get all products 
exports.getAllProducts = async (req,res,next) => {

    try {
       

        const features = new ApiFeatures(Product.find(),req.query).filter()
        const products = await features.query;

        if (products.length === 0) {
            return next(new ErrorHandler("Products not found !",500))
        }

        res.status(200).json({
            success:true,
            products
        })
        
    } catch (error) {
        return next(new ErrorHandler("Products not found !",500))
    }
}

