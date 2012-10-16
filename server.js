/*var http = require('http');
http.createServer(function (req, res) {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end('Hello Worldsssssssssff\n');
}).listen(process.env.PORT);*/

var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world');
});



app.listen(process.env.PORT);