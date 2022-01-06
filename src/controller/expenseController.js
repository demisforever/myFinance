const controller = {};
const mysqlconnection = require('../database');

var querySelectExpenses = "SELECT expense.idExpense, expense.date, expense.amount, expense.description as expenseDescription, expense.currency, expense_type.description as typeDescription, expense_type.idExpenseType FROM myfinance.expense JOIN myfinance.expense_type ON myfinance.expense_type.idExpenseType = myfinance.expense.idExpenseType order by expense.idExpense DESC;";
var queryInsertExpenses = "INSERT INTO myfinance.expense ( myfinance.expense.date, myfinance.expense.amount, myfinance.expense.description, myfinance.expense.currency, myfinance.expense.idExpenseType) VALUES (?, ?, ?, ?, ?);";
var querySelectExpenseType = "SELECT idExpenseType, description FROM myfinance.expense_type;";

controller.list = (req, res) => {
    mysqlconnection.query(querySelectExpenses + querySelectExpenseType, (error, rows) => {
        if (error) {
            throw error;
        } else {
            res.render('expense', {
                dataExpense: rows
            });
        }
    });
};

controller.create = (req, res) => {
    const { date, description, amount, currency, expenseType } = req.body;
    mysqlconnection.query(queryInsertExpenses, [date, amount, description, currency, expenseType], (error, rows) => {
        if (error) {
            console.log(err);
        }
    });
};

module.exports = controller;