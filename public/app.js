// tell cloud9 linter to not bother about jquery $
/* global $ */


var API = '/api/todos';
var $todoInput = $('#todoInput');

$(function() {
  // DOM is ready, request todos
   $.getJSON(API) // relative URL since we are requesting our own server 
        .then(addTodos)         // we don't care to much about propper error handling now
        .catch(console.error.bind(console))
  
  // on enter press in input, submit todo
  $todoInput.keypress(function(event) {
      if (event.which == 13) {
          submitTodo($todoInput.val());
      }
  })
});



function addTodos(todos) {
    todos.forEach(function(todo) {
        addTodo(todo);
    })
}

function addTodo(todo) {
    var $todoList = $('.list');
    var newTodo = $('<li class="task"></li>')
        .html(todo.name)
        .toggleClass('done', todo.completed) 
        .appendTo($todoList)
}

function submitTodo(name) {
    $.post(API, {name: name})
    .then(function(newTodo) {
        addTodo(newTodo);
        $todoInput.val('');
    })
    .catch(console.error.bind(console))
}