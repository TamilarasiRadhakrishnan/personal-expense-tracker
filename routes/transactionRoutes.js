const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController'); // Ensure the path is correct

// Define routes
router.get('/', transactionController.getAllTransactions); // Retrieve all transactions
router.post('/', transactionController.addTransaction); // Add a new transaction
router.get('/:id', transactionController.getTransactionById); // Get a transaction by ID
router.put('/:id', transactionController.updateTransaction); // Update a transaction by ID
router.delete('/:id', transactionController.deleteTransaction); // Delete a transaction by ID

module.exports = router;
