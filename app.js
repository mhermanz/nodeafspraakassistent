
var express = require('express'),
    routes = require('./routes.js'),
    routeConnector = require('./route-connector.js'),
    authentication = require('./authentication.js'),
    database = require('./model/db.js');

var app = express();

routeConnector.connectToExpress(
    app,
    routes,
    express.basicAuth,
    authentication.authenticate,
    database);

app.listen(process.env.PORT);