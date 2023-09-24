const express = require('express');
const router = express.Router();
const Category = require('../../Model/Admin/categorySchema'); // Import the Category model
const Product = require('../../Model/Admin/productSchema'); // Import the Category model

// Create a new category
router.post('/categories/new', async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(422).json({ message: 'Please provide a category name' });
        }

        const category = new Category({ name });
        await category.save();
        res.status(201).json(category);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Get all categories
router.get('/categories', async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Get a specific category by ID
// Get a specific category by ID and populate its associated products
// Get a specific category by ID and populate its associated products
router.get('/categories/:id', async (req, res) => {
    try {
      const categoryId = req.params.id;
      
      // Find the category by ID and populate its 'products' field
      const category = await Category.findById(categoryId).populate('products');
  
      if (!category) {
        return res.status(404).json({ message: 'Category not found' });
      }
  
      res.json(category);
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  });
  
  

module.exports = router;
