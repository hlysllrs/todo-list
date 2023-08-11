const express = require('express')
const router = express.Router()
const todoCtrl = require('../../controllers/api/todos')


// Index -> /api/todos
router.get('/', todoCtrl.indexNotComplete, todoCtrl.jsonTodos)

// Index -> /api/todos/completed
router.get('/completed', todoCtrl.indexComplete, todoCtrl.jsonTodos)

// Delete -> /api/todos/:id
router.delete('/:id', todoCtrl.destroy, todoCtrl.jsonTodo)
// or if we didn't want to return the todo's json, we could use: 
// router.delete('/:id', todoCtrl.destroy, (req, res) => res.status(204)) 

// Update -> /api/todos/:id
router.put('/:id', todoCtrl.update, todoCtrl.jsonTodo)

// Create -> /api/todos/
router.post('/', todoCtrl.create, todoCtrl.jsonTodo)

// Show -> /api/todos/:id
router.get('/:id', todoCtrl.show, todoCtrl.jsonTodo)

module.exports = router