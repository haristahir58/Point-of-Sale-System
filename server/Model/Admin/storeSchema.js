const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required: true
    },
    location:{
        type: String,
        enum: ['Rawalpindi, Pakistan', 
               'Lahore, Pakistan',
               'Islamabad, Pakistan',
               'Karachi, Pakistan',
               'Balochistan, Pakistan',
               'Peshawar, Pakistan',
               'Northern District, Pakistan'
              ],
        required: true,
    },
    address: {
        type: String,
        required: true      
    },
   
})

const Store = new mongoose.model('store', storeSchema)
module.exports = Store;