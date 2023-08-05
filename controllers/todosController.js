const express = require('express');
const Todo = require('../models/todoModel')
const {getTodos, getTodo, createTodo, updateTodo, deleteTodo} = require('../businessServices/todoBusinessService')

const router = express.Router();



router.get('/', getTodos);

router.get('/:id', getTodo);

router.post('/', createTodo);

// update a product
router.put('/:id', updateTodo);

// delete a product

router.delete('/:id', deleteTodo);








module.exports = router;