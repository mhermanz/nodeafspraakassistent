exports.connectToExpress = function(app,routes,auth,fnLogin){
    var fnRestictTo = function andRestrictTo(role) {
        if (role === 'all'){
            return function(req, res, next) {
                next();
            };
        }
        return auth(function(username, password) {
            return fnLogin(role,username,password);
        }, 'Unauthorized');
    }
    for (var i = 0;i < routes.length; i++){ 
        app[routes[i].method](routes[i].path,fnRestictTo(routes[i].accessLevel),routes[i].controller);
    }
};

