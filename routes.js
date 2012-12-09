var test = require('./controllers/test.js');

exports = module.exports = [
    //DEFAULT
    {method:'get', path:'/',controller:function(req, res){res.send('hello world');},accessLevel:'all'}, 
    //TEST
    {method:'get', path:'/test',controller:test.list,accessLevel:'all'},     
    {method:'get', path:'/test/:id',controller:test.get,accessLevel:'user'},     
    {method:'post', path:'/test',controller:test.insert,accessLevel:'admin'},    
    {method:'put', path:'/test/:id',controller:test.update,accessLevel:'all'},     
    {method:'del', path:'/test/:id',controller:test.delete,accessLevel:'all'}     
];
