const express = require('express');
const expenseControllers = require('../controllers/expense');

const router = express.Router();

router.post('/add-expense', expenseControllers.postExpense);

router.get('/get-expense', expenseControllers.getExpense);

router.delete('/delete-expense/:id',expenseControllers.deleteExpense);

module.exports=router;



