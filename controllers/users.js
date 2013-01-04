/*
Handles users:
*/
exports.list = function(req,res,db){
    db.User.find(function (err, users) {
        res.send(users);
    });
};
exports.get = function(req,res,db){
    db.User.findById(req.params.id,function (err, users) {
        res.send(users);
    });
};
exports.insert = function(req,res,db){
    var user = new db.User(req.body);
    user.save();
    res.send(user);
};
exports.update = function(req,res,db){
    res.send("update");
};
exports.delete = function(req,res,db){
    res.send("delete");
};