var session = require('express-session')
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');
var async = require('async');
var crypto = require('crypto');
var express = require('express');
//var cors = require('cors');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var flash = require('express-flash');
var config = require('./config.js');
var nodemailer = require('nodemailer'); //password reset
var sgTransport = require('nodemailer-sendgrid-transport'); //password reset
var sendgrid  = require('sendgrid'); //password reset
var User = require('./model/userModel'); // password reset
var engine = require('consolidate');

var options = {
	auth: {
		api_key: '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'
	}
};
var mailer = nodemailer.createTransport(sgTransport(options));




var configSession = require('./passport/setsecret.js');

require('./passport/passport.js')(passport);
var userControl = require('./controller/userControl.js');
var saleControl = require('./controller/saleControl.js');

var app = express();

//app.use(cors);

///////////////////////////////
//        Middleware         //
///////////////////////////////


// app.set('views', __dirname + '/views');
// app.engine('html', engine.mustache);
// app.set('view engine', 'html');


//app.set('views', path.join(__dirname, 'views')); //
//app.set('view engine', 'html'); //
app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(session(configSession));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
//app.use(express.static(__dirname+'/public'));
app.use(express.static(path.join(__dirname, 'public')));




app.post('/login', userControl.login);
app.post('/forgot', userControl.forgot);
//app.get('reset/:token', userControl.reset);

app.get('/reset/:token', function(req, res) {
  User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
    if (!user) {
      req.flash('error', 'Password reset token is invalid or has expired.');
      return res.redirect('/forgot');
    }
    res.render('/#/reset', {
      user: req.user
    });
  });
});

app.post('/reset/:token', function(req, res) {
  async.waterfall([
    function(done) {
      User.findOne({ resetPasswordToken: req.params.token, resetPasswordExpires: { $gt: Date.now() } }, function(err, user) {
        if (!user) {
          req.flash('error', 'Password reset token is invalid or has expired.');
          return res.redirect('back');
        }

        user.local.password = req.body.local.password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;

        user.save(function(err) {
          req.logIn(user, function(err) {
            done(err, user);
          });
        });
      });
    },
    function(user, done) {
      var mailOptions = {
        to: user.local.userName,
        from: 'passwordreset@demo.com',
        subject: 'Your password has been changed',
        text: 'Hello,\n\n' +
          'This is a confirmation that the password for your account ' + user.local.userName + ' has just been changed.\n'
      };
      sendgrid.send(mailOptions, function(err, json) {
        req.flash('success', 'Success! Your password has been changed.');
        done(err);
      });
    }
  ], function(err) {
    res.redirect('/#/reset');
  });
});



app.post('/signup', userControl.signup);
app.get('/logout', userControl.logout);


	




app.get('/auth/facebook', userControl.loginfacebook);
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
 app.post('/sale/:id', userControl.addSale);
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
///////////////////////////////
//         Routes            //
///////////////////////////////



mongoose.connect(
  "mongodb://localhost:27017/sales"
);

mongoose.connection.once('open', function(){
  console.log('We have data');
})

app.listen(config.port, function(){
  console.log('The server is on', config.port)
})
