var test = require('./controllers/test.js');

exports = module.exports = function(app){
    
    //default route
    app.get('/', function(req, res){
      res.send('hello world');
    });
    
    //users
    app.get('/test',andRestrictTo('all'),test.list );
    app.get('/test/:id',andRestrictTo('user'), test.get);
    app.post('/test',andRestrictTo('admin'), test.insert);
    app.put('/test/:id',andRestrictTo('admin'), test.update);
    app.del('/test/:id',andRestrictTo('admin'), test.delete);
};

function andRestrictTo(role) {
    return function(req, res, next) {
        (role === "all" || role === req.query.user)
           ? next() : next(new Error('Unauthorized'));
   };
}