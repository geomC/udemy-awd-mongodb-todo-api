// tell cloud9 linter to not bother about jquery $
/* global $ */


var API = '/api/todos';
var $todoInput = $('#todoInput');

$(function() {
  // DOM is ready, request todos
   $.getJSON(API) // relative URL since we are requesting our own server 
        .then(showTodos)         // we don't care to much about propper error handling now
        .catch(console.error.bind(console))
  
  // on enter press in input, submit todo
  $todoInput.keypress(function(event) {
      if (event.which == 13) {
          submitTodo($todoInput.val());
      }
  })
  
  // listeners to todo items must be attached to the list since it is there when the script runs
  // --> todos are being fetched async and then added as list elements
  $('.list').on('click', 'span.deleteTodo', function() {
      // get reference on parent element of clicked X item (the list element)
       var $parentLi = $(this).parent();
      // get todo id, then do DELETE req for todo
      $.ajax({
          method: 'DELETE',
          url: API + '/' + $parentLi.data('id')
      })
      // remove dom element
      $parentLi.remove();
  });
});


function showTodos(todos) {
    todos.forEach(function(todo) {
        showTodo(todo);
    })
}

function showTodo(todo) {
    var $todoList = $('.list');
    var newTodo = $('<li class="task"></li>')
        .html(todo.name)
        .toggleClass('done', todo.completed)
        .data('id', todo._id)
        .append($('<span class="deleteTodo">X</span>'))
        .appendTo($todoList)
}

function submitTodo(name) {
    $.post(API, {name: name})
    .then(function(newTodo) {
        showTodo(newTodo);
        $todoInput.val('');
    })
    .catch(console.error.bind(console))
}