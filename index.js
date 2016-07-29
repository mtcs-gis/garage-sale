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


app.get('/users', userControl.getAllUsers);
app.get('/user', userControl.getOneUser);
app.put('/user/:id', userControl.update);
app.delete('/user/:id', userControl.delete);
app.post('/sale/:id', userControl.addSale);
app.put('/sale/:id', userControl.updateSale);

// app.get('/sales', saleControl.read );
// app.get('/sales:id',saleControl.readById);
// app.put('/sales:id',saleControl.update);

// passport.use(new FacebookStrategy({
// 		clientID:'604081799753537',
// 		clientSecret:'eb1cc89d34bc0bfae8c4da3340fd5bdb',
// 		callbackURL:'http://localhost:3000/auth/facebook/callback'
// }, function(token, tokenSecret, profile, done){
// 	return done(null, profile);
// }))

// app.get("/auth/facebook", passport.authenticate('facebook'));
// app.get("/auth/facebook/callback", passport.authenticate('facebook', {
// 		successRedirect: "/me",
// 		failureRedirect: "/home"
// }), function(req, res){
// 	console.log(req.sesion);
// });


// passport.serializeUser(function(user,done){
// 	done(null, user);
// });
// passport.deserializeUser(function(obj, done){
// 	done(null, obj);
// })


// app.get('/me', function(req, res){
// 	res.send(req.user);
// });

mongoose.connect(
  "mongodb://localhost:27017/sales"
);

mongoose.connection.once('open', function(){
  console.log('We have data');
})

app.listen(config.port, function(){
  console.log('The server is on', config.port)
})
