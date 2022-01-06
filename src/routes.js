const express = require('express');
const router = express.Router();

//importa controladores
const expenseController = require('./controller/expenseController');
router.get('/', (req, res) => {
    expenseController.list(req, res);
});

router.post('/add', (req, res) => {
    expenseController.create(req, res);
    // refresca la pagina luego de crear
    res.redirect(req.get('referer'));
});

module.exports = router;