
var express = require('express');
var routes = require('./routes.js');
var routeConnector = require('./route-connector.js');

var app = express();

var restrict = function andRestrictTo(role) {
    return function(req, res, next) {
        (role === "all" || role === req.query.user)
           ? next() : next(new Error('Unauthorized'));
   };
}

routeConnector.connectToExpress(app,routes,restrict);

app.listen(process.env.PORT);


