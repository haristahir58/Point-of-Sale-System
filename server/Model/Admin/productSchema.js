const mongoose = require('mongoose');
const Category = require('../Admin/categorySchema')

const productSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId, // Use ObjectId to reference categories
        ref: 'Category', // Reference the 'Category' model
        required: true,
    },
    brand: {
        type: String,
        required: true      
    },
    description: {
        type: String,
        required: true      
    },
    imageUrl:{
        type:String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
})

const Product = new mongoose.model('product', productSchema)
module.exports = Product;