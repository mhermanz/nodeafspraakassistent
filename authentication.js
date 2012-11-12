exports.authenticate = function (accessLevel,username,password){
    return (username === accessLevel && password === accessLevel);
};
