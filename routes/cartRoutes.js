const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Create a new cart
router.post('/', cartController.createCart);

// Retrieve a cart by ID
router.get('/:cartId', cartController.getCartById);

// Update a cart by ID
router.put('/:cartId', cartController.updateCartById);

// Delete a cart by ID
router.delete('/:cartId', cartController.deleteCartById);

module.exports = router;
