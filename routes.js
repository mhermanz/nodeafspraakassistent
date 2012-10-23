var test = require('./controllers/test.js');

exports = module.exports = [
    //DEFAULT
    {method:'get', path:'/',controller:function(req, res){res.send('hello world');},restrictTo:'all'}, 
    //TEST
    {method:'get', path:'/test',controller:test.list,restrictTo:'admin'},     
    {method:'get', path:'/test/:id',controller:test.list,restrictTo:'user'},     
    {method:'post', path:'/test',controller:test.list,restrictTo:'all'},    
    {method:'put', path:'/test/:id',controller:test.list,restrictTo:'all'},     
    {method:'del', path:'/test/:id',controller:test.list,restrictTo:'all'}     
];
