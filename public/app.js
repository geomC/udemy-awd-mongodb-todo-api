// tell cloud9 linter to not bother about jquery $
/* global $ */

$(function() {
  // DOM is ready, request todos
  $.getJSON('/api/todos') // relative URL since we are requesting our own server 
  .then(addTodos)         // we don't care to much about error handling now
  
  
});

function addTodos(todos) {
    var todoList = $('.list');
    todos.forEach(function(todo) {
        var listItem =  $('<li class="task"></li>')
        .html(todo.name)
        .toggleClass('done', todo.completed)
        .appendTo(todoList)
    });
}