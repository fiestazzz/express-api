const Todo = require('../models/todoModel')
const asyncHandler = require('express-async-handler')

// get all product
const getTodos = asyncHandler(async(req, res) => {
    try {
        const todos = await Todo.find({});
        res.status(200).json(todos);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
})





module.exports = {
    getTodos
}