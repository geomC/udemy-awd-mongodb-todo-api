var mongoose = require('mongoose');
mongoose.set('debug', true); // optional
mongoose.connect('mongodb://localhost/todo-api'); // opens or creates dp todo-api

mongoose.Promise = Promise; // use Promise syntax

module.exports.Todo = require("./todo")