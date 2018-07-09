var express = require("express"),
    app = express(),
    port =  process.env.PORT || 3000,
    bodyParser = require("body-parser");
    
var todoRoutes = require('./routes/todos');


app.get('/', function(req, res) {
    res.send('HELLO FROM THE ROOT ROUTE')
})

// make usage of body-parser to parse post req bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(
    '/api/todos', // prefix for all routes
    todoRoutes
);

app.listen(port, function() {
    console.log('app is running on port ' + port)
});