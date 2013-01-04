var test = require('./controllers/test.js'),
    users = require('./controllers/users.js');

exports = module.exports = [
    //DEFAULT
    {method:'get', path:'/',controller:function(req, res){res.send('hello world');},accessLevel:'all'}, 
    //TEST
    {method:'get', path:'/test',controller:test.list,accessLevel:'admin'},     
    {method:'get', path:'/test/:id',controller:test.get,accessLevel:'user'},     
    {method:'post', path:'/test',controller:test.insert,accessLevel:'admin'},    
    {method:'put', path:'/test/:id',controller:test.update,accessLevel:'all'},     
    {method:'del', path:'/test/:id',controller:test.delete,accessLevel:'all'}, 
    //USERS
    {method:'get', path:'/users',controller:users.list,accessLevel:'all'},     
    {method:'get', path:'/users/:id',controller:users.get,accessLevel:'all'},     
    {method:'post', path:'/users',controller:users.insert,accessLevel:'all'},    
    {method:'put', path:'/users/:id',controller:users.update,accessLevel:'all'},     
    {method:'del', path:'/users/:id',controller:users.delete,accessLevel:'all'}     
];
