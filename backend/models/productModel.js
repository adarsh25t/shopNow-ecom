const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Product Name"],
        trim:true
    },
    price:{
        type:Number,
        required:[true,"Please Enter Product Price"],
        maxLength:[8,"Price cannot exceed 8 characters"]
    },
    description:{
        type:String,
        required:[true,"Please Enter product Description"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    },
    category:{
        type:String,
        required:[true,"Please Enter Product category"]
    },
    Stock:{
        type:Number,
        required:[true,"Please Enter Product Stock"],
        maxLength:[4,"Stock cannot exeed 4 characters"],
        default:1
    },
    numberOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            Comment:{
                type:String,
                required:true
            }
        }
    ],
    createAt:{
        type:Date,
        default:Date.now
    }
})

const Product = mongoose.model('Product',productSchema);

module.exports = Product;