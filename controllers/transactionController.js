// controllers/transactionController.js

const Transaction = require('../models/transactionModel'); // Adjust according to your model

// Get all transactions
exports.getAllTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.findAll(); // Example for Sequelize
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Add a new transaction
exports.addTransaction = async (req, res) => {
    const { type, category, amount, date, description } = req.body;
    try {
        const newTransaction = await Transaction.create({ type, category, amount, date, description });
        res.status(201).json(newTransaction);
    } catch (error) {
        res.status(400).json({ message: 'Error adding transaction', error });
    }
};

// Get a transaction by ID
exports.getTransactionById = async (req, res) => {
    const { id } = req.params;
    try {
        const transaction = await Transaction.findByPk(id); // Example for Sequelize
        if (transaction) {
            res.json(transaction);
        } else {
            res.status(404).json({ message: 'Transaction not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

// Update a transaction by ID
exports.updateTransaction = async (req, res) => {
    const { id } = req.params;
    const { type, category, amount, date, description } = req.body;
    try {
        const transaction = await Transaction.findByPk(id);
        if (transaction) {
            await transaction.update({ type, category, amount, date, description });
            res.json({ message: 'Transaction updated successfully' });
        } else {
            res.status(404).json({ message: 'Transaction not found' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Error updating transaction', error });
    }
};

// Delete a transaction by ID
exports.deleteTransaction = async (req, res) => {
    const { id } = req.params;
    try {
        const transaction = await Transaction.findByPk(id);
        if (transaction) {
            await transaction.destroy();
            res.json({ message: 'Transaction deleted successfully' });
        } else {
            res.status(404).json({ message: 'Transaction not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};
