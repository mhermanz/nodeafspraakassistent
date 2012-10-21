exports.list = function(req,res){
    res.send("list");
};
exports.get = function(req,res){
    var retValue = "get " + req.params.id + "\n";
    
    for (var member in req.query){
        retValue += member + ":" + req.query[member] + "\n";
    }
    res.send(retValue);
};
exports.insert = function(req,res){
    res.send("insert");
};
exports.update = function(req,res){
    res.send("update");
};
exports.delete = function(req,res){
    res.send("delete");
};