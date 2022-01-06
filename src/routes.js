const express = require('express');
const router = express.Router();

//importa controladores
const expenseController = require('./controller/expenseController');
router.get('/', (req, res) => {
    expenseController.list(req, res);
});

router.post('/add', (req, res) => {
    expenseController.create(req, res);
});

module.exports = router;