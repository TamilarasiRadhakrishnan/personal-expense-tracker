const express = require('express');
const bodyParser = require('body-parser');
const transactionRoutes = require('./routes/transactionRoutes'); // Ensure this is declared only once

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json()); // Parse JSON request bodies

// Routes
app.use('/transactions', transactionRoutes); // Use transaction routes

// Base route
app.get('/', (req, res) => {
  res.send('Welcome to the Personal Expense Tracker API');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
