const mongoose = require('mongoose');
const Product = require('./productSchema')

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        enum: ['Mobile Phones', 'Tablets', 'TVs', 'Computers', 'Watches']
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    }]

});

module.exports = mongoose.model('Category', categorySchema);
