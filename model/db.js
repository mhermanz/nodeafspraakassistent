var mongoose = require('mongoose');

var db = mongoose.createConnection('mongodb://martijn:wizz9231@ds043997.mongolab.com:43997/afspraken');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {console.log('connection is open');  
});

//User
var userSchema = new mongoose.Schema({
    name: String,
    password: String
});
exports.User = db.model('User', userSchema);



