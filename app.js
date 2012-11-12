
var express = require('express'),
    routes = require('./routes.js'),
    routeConnector = require('./route-connector.js'),
    authentication = require('./authentication.js');

var app = express();

routeConnector.connectToExpress(
    app,
    routes,
    express.basicAuth,
    authentication.authenticate);

app.listen(process.env.PORT);