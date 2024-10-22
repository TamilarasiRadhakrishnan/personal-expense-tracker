const db = require('../config/database');

// Add a new category
exports.addCategory = (category, callback) => {
  const { name, type } = category;
  const sql = `INSERT INTO categories (name, type) VALUES (?, ?)`;
  db.run(sql, [name, type], function (err) {
    callback(err, this.lastID);
  });
};

// Get all categories
exports.getAllCategories = (callback) => {
  const sql = `SELECT * FROM categories`;
  db.all(sql, [], (err, rows) => {
    callback(err, rows);
  });
};
