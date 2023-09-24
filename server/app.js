const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const multer = require('multer');
const cookieparser = require('cookie-parser')
const app = express();

dotenv.config({ path: './config.env' });
require('./db/conn');

// Model
const Users = require('./Model/Users/userSchema');
const Admin = require('./Model/Admin/adminSchema');
const Product = require('./Model/Admin/productSchema');
const Store = require('./Model/Admin/storeSchema');
const Supplier = require('./Model/Admin/supplierSchema');
const Category = require('./Model/Admin/categorySchema');


// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieparser());
app.use('/uploads', express.static('uploads'));

//Routes
app.use(require('./Routes/Users/userRoutes'));
app.use(require('./Routes/Admin/adminRoutes'));
app.use(require('./Routes/Admin/productRoutes'));
app.use(require('./Routes/Admin/storeRoutes'));
app.use(require('./Routes/Admin/supplierRoutes'));
app.use(require('./Routes/Admin/categoryRoutes'));




const PORT = 5000; 
app.listen(PORT, () => {
  console.log(`Server is running at Port No ${PORT}`);
});
