exports.connectToExpress = function(app,routes,fnRestictTo){
    for (var i = 0;i < routes.length; i++){ 
        app[routes[i].method](routes[i].path,fnRestictTo(routes[i].restrictTo),routes[i].controller);
    }
};