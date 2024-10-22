const db = require('../config/database');

// Add a new transaction
exports.addTransaction = (transaction, callback) => {
  const { type, category, amount, date, description } = transaction;
  const sql = `INSERT INTO transactions (type, category, amount, date, description) VALUES (?, ?, ?, ?, ?)`;
  db.run(sql, [type, category, amount, date, description], function (err) {
    callback(err, this.lastID);
  });
};

// Get all transactions
exports.getAllTransactions = (callback) => {
  const sql = `SELECT * FROM transactions`;
  db.all(sql, [], (err, rows) => {
    callback(err, rows);
  });
};

// Get transaction by ID
exports.getTransactionById = (id, callback) => {
  const sql = `SELECT * FROM transactions WHERE id = ?`;
  db.get(sql, [id], (err, row) => {
    callback(err, row);
  });
};

// Update a transaction by ID
exports.updateTransaction = (id, transaction, callback) => {
  const { type, category, amount, date, description } = transaction;
  const sql = `UPDATE transactions SET type = ?, category = ?, amount = ?, date = ?, description = ? WHERE id = ?`;
  db.run(sql, [type, category, amount, date, description, id], function (err) {
    callback(err, this.changes);
  });
};

// Delete a transaction by ID
exports.deleteTransaction = (id, callback) => {
  const sql = `DELETE FROM transactions WHERE id = ?`;
  db.run(sql, [id], function (err) {
    callback(err, this.changes);
  });
};
