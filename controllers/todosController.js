const express = require('express');
const Todo = require('../models/todoModel')
const {getTodos} = require('../businessServices/todoBusinessService')

const router = express.Router();

router.get('/', getTodos);








module.exports = router;