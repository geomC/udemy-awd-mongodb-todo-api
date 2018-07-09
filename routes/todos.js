var express = require("express"),
    router = express.Router();
    
var db = require("../models") // will require the index file

/*

ALL REQUESTS ARE PREFIXED WITH /api/todos/ DUE TO THE app.use CALL in index.js

*/
    
// SHOW ALL ROUTE
router.get('/', function(req, res) { 
    db.Todo.find()
    .then(function(todos) {
        res.json(todos)
    })
    .catch(function(err) {
        res.send(err)
    })
});

// CREATE ROUTE
router.post('/', function(req, res) {
    // log req body
    console.log('received todo', req.body)
    // create Todo item
    db.Todo.create(req.body)
    .then(function(newTodo) {
        res
        .status(201)
        .send(newTodo)
    })
    .catch(function(err) {
        res.send(err)
    })
})

// SHOW TODO ITEM ROUTE

router.get('/:todoId', function(req, res) { // todoId is a varname for the passed value
   db.Todo.findById(req.params.todoId)      // extract the db item matching the passed id
    .then(function(foundTodo) {
        res
        .status(200)
        .send(foundTodo)
    })
    .catch(function(err) {
        res.send(err)
    })
}); 

module.exports = router;