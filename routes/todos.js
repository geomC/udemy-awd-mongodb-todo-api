var express = require("express"),
    router = express.Router(),
    helpers =  require("../helpers/todos");


router.route('/')               // when /api/todos/ is requested
    .get(helpers.getTodos)      // show all todos
    .post(helpers.createTodo)   // create todo

// SHOW TODO ITEM ROUTE
router.route('/:todoId')        // when /api/todos/123someid123 is requested
    .get(helpers.getTodo)       // show specific todo
    .post(helpers.updateTodo)   // update specific todo
    .delete(helpers.deleteTodo) // delete todo

module.exports = router;