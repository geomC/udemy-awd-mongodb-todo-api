var express = require("express"),
    app = express(),
    port =  process.env.PORT || 3000,
    bodyParser = require("body-parser");
    
var todoRoutes = require('./routes/todos');

// make usage of body-parser to parse post req bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// serve files in views folder as static content
app.use(express.static(__dirname + '/views'));

// todo app client
app.get('/', function(req, res) {
    res.sendFile('index.html')
})

// todo app api
app.use(
    '/api/todos', // prefix for all routes
    todoRoutes
);

app.listen(port, function() {
    console.log('app is running on port ' + port)
});