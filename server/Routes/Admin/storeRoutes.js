const express = require('express');
const router = express.Router();
const Store = require('../../Model/Admin/storeSchema'); // Import your Store model

// Route to list all stores
router.get('/stores', async (req, res) => {
  try {
    const stores = await Store.find();
    res.json(stores);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route to add a new store
router.post('/stores/new', async (req, res) => {
  const { name, location, address } = req.body;

  try {
    const store = new Store({ name, location, address });
    await store.save();
    res.status(201).json(store);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Route to update a store by ID
router.patch('/stores/:id', async (req, res) => {
  const { name, location, address } = req.body;

  try {
    const store = await Store.findByIdAndUpdate(
      req.params.id,
      { name, location, address },
      { new: true }
    );

    if (!store) {
      return res.status(404).json({ error: 'Store not found' });
    }

    res.json(store);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Route to delete a store by ID
router.delete('/stores/:id', async (req, res) => {
  try {
    const store = await Store.findByIdAndRemove(req.params.id);

    if (!store) {
      return res.status(404).json({ error: 'Store not found' });
    }

    res.json({ message: 'Store deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
