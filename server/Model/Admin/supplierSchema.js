const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required: true
    },
    address: {
        type: String,
        required: true      
    },

})

const Supplier = new mongoose.model('supplier', supplierSchema)
module.exports = Supplier;