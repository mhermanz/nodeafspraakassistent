var user = require('./controllers/test.js');

exports = module.exports = function(app){
    
    //default route
    app.get('/', function(req, res){
      res.send('hello world');
    });
    
    //users
    app.get('/test',user.list );
    app.get('/test/:id', user.get);
    app.post('/test', user.insert);
    app.put('/test/:id', user.update);
    app.del('/test/:id', user.delete);
};