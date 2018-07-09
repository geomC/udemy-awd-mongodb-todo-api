var db = require("../models")

exports.getTodos = function(req, res) { 
    db.Todo.find()
    .then(function(todos) {
        res.json(todos)
    })
    .catch(function(err) {
        res.send(err)
    })
}

exports.createTodo = function(req, res) {
    // log req body
    console.log('received todo', req.body)
    // create Todo item
    db.Todo.create(req.body)
    .then(function(newTodo) {
        res
        .status(201)
        .json(newTodo)
    })
    .catch(function(err) {
        res.send(err)
    })
}

exports.getTodo = function(req, res) { // todoId is a varname for the passed value
   db.Todo.findById(req.params.todoId)      // extract the db item matching the passed id
    .then(function(foundTodo) {
        res
        .status(200)
        .json(foundTodo)
    })
    .catch(function(err) {
        res.send(err)
    })
}

exports.updateTodo = function(req, res) { 
   db.Todo.findOneAndUpdate(
       {_id: req.params.todoId}, 
       req.body, 
       {new: true} // pass updated item to success cb
       )      
    .then(function(updatedTodo) {
        res
        .status(200)
        .json(updatedTodo)
    })
    .catch(function(err) {
        res.send(err)
    })
}

exports.deleteTodo = function(req, res) { 
   db.Todo.remove({_id: req.params.todoId})      
    .then(function() {
        res
        .status(200)
        .json({message: 'We deleted it'})
    })
    .catch(function(err) {
        res.send(err)
    })
} 

module.exports = exports // wtf?