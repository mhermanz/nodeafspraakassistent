exports.connectToExpress = function(app,routes,auth,fnLogin,db){
    var fnRestictTo = function (accessLevel) {
        if (accessLevel === 'all'){
            return function(req, res, next) {
                next();
            };
        }
        return auth(function(username, password) {
            return fnLogin(accessLevel,username,password,db);
        }, 'Unauthorized');
    };
    var fnConnectDbToController = function (controller){
        return function (req,res){
            return controller(req,res,db);
        };
    };
    for (var i = 0;i < routes.length; i++){ 
        app[routes[i].method](
            routes[i].path,
            fnRestictTo(routes[i].accessLevel),
            fnConnectDbToController(routes[i].controller));
    }
};

