# personal-expense-tracker
personal-expense-tracker
Project Overview
The Personal Expense Tracker is a RESTful API built using Node.js and Express.js that allows users to manage personal financial records such as income and expenses. It includes functionalities to add, retrieve, update, and delete transactions, along with generating summaries of the total income, expenses, and balance.

Features
Add Transactions: Users can add both income and expense transactions.
Retrieve Transactions: Retrieve all transactions or a specific transaction by its ID.
Update Transactions: Update details of an existing transaction by its ID.
Delete Transactions: Delete a transaction by its ID.
Summary: Get a summary of total income, expenses, and balance.
Optional User Authentication (Bonus): Secure the routes by implementing user authentication.
Pagination (Bonus): Handle large data volumes in the transactions list.
Technologies Used
Node.js with Express.js for backend development.
SQLite as the database for storing transactions and categories.
Body-Parser for parsing incoming request bodies in JSON format.
Prerequisites
Ensure you have the following installed on your local machine or codespace environment:

Node.js (v14 or higher)
npm (v6 or higher)
Installation
Clone the repository:


git clone https://github.com/your-username/personal-expense-tracker.git
cd personal-expense-tracker
Install dependencies:


npm install
Start the application:


npm start
The server will start on http://localhost:3000.

API Endpoints
Transactions
Add a new transaction

Endpoint: POST /transactions
Request Body:
json

{
  "type": "income",
  "category": "Salary",
  "amount": 5000,
  "date": "2024-10-22",
  "description": "Monthly salary"
}
Response:
json

{
  "id": 1
}
Get all transactions

Endpoint: GET /transactions
Response:
json

[
  {
    "id": 1,
    "type": "income",
    "category": "Salary",
    "amount": 5000,
    "date": "2024-10-22",
    "description": "Monthly salary"
  },
  {
    "id": 2,
    "type": "expense",
    "category": "Groceries",
    "amount": 200,
    "date": "2024-10-23",
    "description": "Grocery shopping"
  }
]
Get a transaction by ID

Endpoint: GET /transactions/:id
Response:
json

{
  "id": 1,
  "type": "income",
  "category": "Salary",
  "amount": 5000,
  "date": "2024-10-22",
  "description": "Monthly salary"
}
Update a transaction by ID

Endpoint: PUT /transactions/:id
Request Body:
json

{
  "type": "expense",
  "category": "Groceries",
  "amount": 150,
  "date": "2024-10-23",
  "description": "Grocery shopping (updated)"
}
Response:
json

{
  "message": "Transaction updated successfully"
}
Delete a transaction by ID

Endpoint: DELETE /transactions/:id
Response:
json

{
  "message": "Transaction deleted successfully"
}
Summary
Get summary of transactions
Endpoint: GET /summary
Response:
json

{
  "total_income": 5000,
  "total_expenses": 200,
  "balance": 4800
}
Database Structure
If using SQLite, the database has two tables:

transactions:

id: Unique identifier (INTEGER PRIMARY KEY AUTOINCREMENT)
type: Type of transaction (either "income" or "expense")
category: Category of the transaction (e.g., "Salary", "Groceries")
amount: Amount of the transaction
date: Date of the transaction
description: Brief description of the transaction
categories:

id: Unique identifier for the category
name: Name of the category
type: Type of the category (either "income" or "expense")
Postman Collection (Optional)
You can create a collection in Postman to test the API. Example screenshots of API requests and responses should be included here.

Bonus Features (Optional)
User Authentication: Implement user authentication using JWT to protect routes and associate transactions with specific users.
Pagination: Add pagination to the GET /transactions endpoint to handle large volumes of transactions.
Project Structure

/personal-expense-tracker
├── config
│   └── database.js
├── controllers
│   └── transactionController.js
├── models
│   └── transactionModel.js
│   └── categoryModel.js
├── routes
│   └── transactionRoutes.js
├── app.js
├── package.json
└── README.md
License
This project is licensed under the MIT License.

