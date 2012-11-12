
var express = require('express');
var routes = require('./routes.js');
var routeConnector = require('./route-connector.js');
var authentication = require('./authentication.js');

var app = express();

var fnLogin = function loginUser(accessLevel,username,password){
    return (username === accessLevel && password === accessLevel);
}

routeConnector.connectToExpress(app,routes,express.basicAuth,authentication.authenticate);
//routeConnector.connectToExpress(app,routes,express.basicAuth,fnLogin);

app.listen(process.env.PORT);