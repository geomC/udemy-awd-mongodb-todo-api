var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name cannot be blank'
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
         type: Date,
         default: Date.now()
    }
});

// now the schema above has to be compiled into a model and exported

var Todo = mongoose.model(
    'Todo', // model name
    todoSchema // schema
);

module.exports = Todo;