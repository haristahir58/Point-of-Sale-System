const express = require('express');
const router = express.Router();
const Supplier = require('../../Model/Admin/supplierSchema'); // Import your Supplier model

// Route to list all suppliers
router.get('/suppliers', async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.json(suppliers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route to add a new supplier
router.post('/suppliers/new', async (req, res) => {
  const { name, address } = req.body;

  try {
    const supplier = new Supplier({ name, address });
    await supplier.save();
    res.status(201).json(supplier);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Route to update a supplier by ID
router.patch('/suppliers/:id', async (req, res) => {
  const { name, address } = req.body;

  try {
    const supplier = await Supplier.findByIdAndUpdate(
      req.params.id,
      { name, address },
      { new: true }
    );

    if (!supplier) {
      return res.status(404).json({ error: 'Supplier not found' });
    }

    res.json(supplier);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Route to delete a supplier by ID
router.delete('/suppliers/:id', async (req, res) => {
  try {
    const supplier = await Supplier.findByIdAndRemove(req.params.id);

    if (!supplier) {
      return res.status(404).json({ error: 'Supplier not found' });
    }

    res.json({ message: 'Supplier deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
