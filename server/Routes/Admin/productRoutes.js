const express = require('express');
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const router = express.Router();
const Product = require('../../Model/Admin/productSchema')
const Category = require('../../Model/Admin/categorySchema')
const db = require('../../db/conn')

//For Getting All the products
router.get('/product', async(req,res)=>{
    try{
        const product =  await Product.find();
        if(!product){
            res.status(404).json({error:"Cant find products"})
        }
        res.json(product)

    }catch(err){
        res.status(400).json({message: err.message})
    }
});

// For getting specific product

router.get('/product/:id', async(req,res)=>{
    try{
        const product = await Product.findOne({_id:req.params.id})
        if(!product){
            res.status(404).json({error: "product Not found"})
        }
        res.json(product)

    }
    catch(err){
    res.status(400).json({message: err.message})
    }

})

// For Posting product Details

router.post('/product/new', upload.single('image'), async (req, res) => {
    console.log(req.file, req.body, 42);
    const { name, brand, description, price } = req.body;
    const imageUrl = req.file.path;
    const categoryId = req.body.categoryId; // Assuming categoryId is present in the request body

    if (!name || !categoryId || !brand || !imageUrl || !description || !price) {
        return res.status(422).json({ message: 'Please fill all the fields' });
    }

    try {
        // Check if the specified category exists
        const existingCategory = await Category.findById(categoryId);
        if (!existingCategory) {
            return res.status(404).json({ message: 'Category not found' });
        }

        // Create a new product
        const product = new Product({
            name,
            category: categoryId, // Assign the category ID directly
            brand,
            description,
            price,
            imageUrl,
        });

        await product.save();

        // Push the new product's ID to the 'products' array in the associated category
        existingCategory.products.push(product._id);
        await existingCategory.save();

        res.status(201).json({ message: 'Product added successfully' });
    } catch (err) {
        console.error(err); // Log the error to the console
  res.status(400).json({ message: err.message });
    }
});


router.put('/product/:id', upload.single('image'), async (req, res) => {
    console.log(req.file, req.body, 42);
    const { name, brand, description, price } = req.body;
    const imageUrl = req.file.path;
    const categoryId = req.body.categoryId; // Assuming categoryId is present in the request body

    if (!name || !categoryId || !brand || !imageUrl || !description || !price) {
        return res.status(422).json({ message: 'Please fill all the fields' });
    }

    try {
        // Check if the specified category exists
        const existingCategory = await Category.findById(categoryId);
        if (!existingCategory) {
            return res.status(404).json({ message: 'Category not found' });
        }

        // Find the product by ID
        const productId = req.params.id;
        const existingProduct = await Product.findById(productId);

        if (!existingProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Update the product data
        existingProduct.name = name;
        existingProduct.category = categoryId;
        existingProduct.brand = brand;
        existingProduct.description = description;
        existingProduct.price = price;
        existingProduct.imageUrl = imageUrl;

        await existingProduct.save();

        res.status(200).json({ message: 'Product updated successfully' });
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: err.message });
    }
});


//For deleting product

router.delete('/product/:id',async(req,res)=>{
    try{
        const product = await Product.findOneAndDelete({_id:req.params.id})
        if(!product){
            res.status(404).json({message:"product not found"})
        }
        res.json(product)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
})




module.exports = router;
