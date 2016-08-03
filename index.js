var express = require('express');
//var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var config = require('./config.js');

var passport = require('passport');

var configSession = require('./passport/setsecret.js');

require('./passport/passport.js')(passport);


var app = express();

//app.use(cors);

app.use(session(configSession));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));

var userControl = require('./controller/userControl.js');
var saleControl = require('./controller/saleControl.js')



app.post('/login', userControl.login);
app.post('/signup', userControl.signup);
app.get('/logout', userControl.logout);

app.get('/auth/facebook', userControl.loginfacebook);
app.get("/auth/facebook/callback", passport.authenticate('facebook', {
		successRedirect: "/",
		failureRedirect: "/logout"
}), function(req, res){
	console.log(req.sesion);
});


app.get('/users', userControl.getAllUsers);
app.get('/user', userControl.getOneUser);
app.put('/user/:id', userControl.update);
app.delete('/user/:id', userControl.delete);
// app.post('/sale/:id', userControl.addSale);
// app.put('/sale/:id', userControl.updateSale);
app.post('/sale', saleControl.create );
app.get('/sale', saleControl.read);
app.get('/sale/:id', saleControl.readById);
app.put('/sale/:id', saleControl.update );
app.delete('/sale/:id', saleControl.delete);


app.get('/sales', saleControl.read );
app.post('/sales', saleControl.create);
app.get('/sales:id',saleControl.readById);
app.put('/sales:id',saleControl.update);

app.get('/profile', function(req, res){
	res.send(req.user);
});




mongoose.connect(
  "mongodb://localhost:27017/sales"
);

mongoose.connection.once('open', function(){
  console.log('We have data');
})

app.listen(config.port, function(){
  console.log('The server is on', config.port)
})
