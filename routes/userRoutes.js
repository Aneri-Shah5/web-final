// Import required modules
const express = require('express');
const userController = require('../controllers/userController');

// Create the router instance
const router = express.Router();

// Define routes
router.post('/', userController.createUser);
router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

// Export the router
module.exports = router;
