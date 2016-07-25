var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var config = require('./config.js');

var passport = require('passport');

var configSession = require('./passport/setsecret.js');

require('./passport/passport.js')(passport);


var app = express();

app.use(cors);
app.use(session(configSession));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));

var userControl = require('./controller/userControl.js');




app.post('/login', userControl.login);
app.post('/signup', userControl.signup);
app.get('/logout', userControl.logout);


app.get('/users', userControl.getAllUsers);
app.get('/user', userControl.getOneUser);
app.put('/user/:id', userControl.update);
app.delete('/user/:id', userControl.delete);





mongoose.connect(
  "mongodb://localhost:27017/sales"
)

mongoose.connection.once('open', function(){
  console.log('We have data');
})

app.listen(config.port, function(){
  console.log('The server is on', config.port)
})
