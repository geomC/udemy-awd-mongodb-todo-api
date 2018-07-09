var express = require("express"),
    router = express.Router();
    
var db = require("../models") // will require the index file

/*

ALL REQUESTS ARE PREFIXED WITH /api/todos/ DUE TO THE app.use CALL in index.js

*/
    
router.get('/', function(req, res) { 
    db.Todo.find()
    .then(function(todos) {
        res.json(todos)
    })
    .catch(function() {
        res.send(err)
    })
});

router.post('/', function(req, res) {
    // log req body
    console.log('received todo', req.body)
    // create Todo item
    db.Todo.create(req.body)
    .then(function(newTodo) {
        res
        .status(291)
        .send(newTodo)
    })
    .catch(function() {
        res.send(err)
    })
})

module.exports = router;