exports.authenticate = function (accessLevel,username,password,db){
    return (username === accessLevel && password === accessLevel);
};
