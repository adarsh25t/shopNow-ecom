const Product = require('../models/productModel')
const ErrorHandler = require('../utils/errorHandler')


// create product
exports.createProduct = async (req,res) => {

    const product = await Product.create(req.body)

    res.status(201).json({
        success:true,
        product
    })
}

// update product by id
exports.updateProduct = async (req,res) => {

    const product = await Product.findById(req.params.id)

    if (!product) {
        res.status(500).json({
            success:false,
            message:"Product not found !"
        })
    }

    const upproduct = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    })

    res.status(200).json({
        success:true,
        upproduct
    })
}

// delete product by id
exports.deleteProduct = async (req,res) => {
    
    let product = await Product.findById(req.params.id)

    if (!product) {
        res.status(500).json({
            success:false,
            message:"Product not found !"
        })
    }

    await Product.remove()

    res.status(200).json({
        success:true,
        message:"Product delete successfully"
    })
  
}  

// get product details
exports.getProductDetails = async (req,res,next) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Product not found", 404));
    }

    res.status(200).json({   
        success:true,
        product
    })   
}  

// get all products 
exports.getAllProducts = async (req,res,next) => {

    const  products = await Product.find();

    if (!products) {
        return next(new ErrorHandler("Products not found !",500))
    }

    res.status(200).json({
        success:true,
        products
    })
}

