
var express = require('express');
var routes = require('./routes.js');

var app = express();

/*
app.get('/', function(req, res){
  res.send('hello world');
});
*/
    

routes(app);

app.listen(process.env.PORT);