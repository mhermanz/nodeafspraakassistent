
var express = require('express');
var routes = require('./routes.js');
var fs = require("fs");
//var https = require('https');
/*
var options = {
  key: fs.readFileSync('./privatekey.pem'),
  cert: fs.readFileSync('./certificate.pem')
};*/

var app = express();


routes(app);

app.listen(process.env.PORT);

//https.createServer(options,app).listen(process.env.PORT);