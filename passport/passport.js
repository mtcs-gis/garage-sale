var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('./../model/userModel.js');
var configAuth = require('./auth.js');



module.exports = function(passport) { //call in passport as a parameter

    passport.serializeUser(function(user, done) {//serialize user and passport stores information about the login and session of the user
        console.log("USER", user);
        done(null, user.id);//sets info to id
    });
    passport.deserializeUser(function(id, done) {//deserializes to return user information after it has been serialized in a language that makes sense to us.
        console.log("ID", id);
        User.findById(id, function(err, user) {//searches for info by id
            done(err, user);
        });
    });

    passport.use('local-login', new LocalStrategy({
    usernameField: 'userName',
    passwordField: 'password',
    passReqToCallback: true
    },
    function(req, userName, password, done){
      User.findOne({ 'local.userName': userName }, function(err, user){
        if(err)
          return done(err);
        if(!user)
          return done(null, false, { message: 'We could not find your User ID' });
        if(!user.validPassword(password))
          return done(null, false, { message: 'Wrong password. Try again.'});
        return done(null, user, { message: 'You logged in successfully' });
      });
    }));

    passport.use('local-signup', new LocalStrategy({//use local-signup
        usernameField : 'userName',//this can be username, email, anything as long as you update all other instances of email on this file.
        passwordField : 'password',
        firstnameField : 'firstName',
        lastnameField : 'lastName',
        selfemailField : 'selfEmail',
        passReqToCallback : true//this makes its so we only need one callback function below
    },
    function(req, userName, password,  done) {
        process.nextTick(function() { //waits until all previous code has completed then runs callback function. This is a node function.
          User.findOne({'local.userName': userName
          }, function(err, user) { //find by email mongoose function

              if (err) return done(err);
              if (user) {
                if (user.validPassword(password)) {
                  console.log('Login Success!');
                    return done(null, user);
                } else {
                  console.log('Invalid userName or password');
                    return done(null, false);
                }
              } else { //otherwise, make a new user
                  var newUser = new User(req.body.local);
                  console.log("New User:" + newUser);
                   newUser.local.userName = userName;
                   newUser.local.firstName = req.body.local.firstName;
                   newUser.local.lastName = lastName;
                   newUser.local.selfEmail = selfEmail;
                  newUser.local.password = newUser.generateHash(password); //hash password
                  // newUser.username = req.body.username;
                  // newUser.role = 'guest';

                  newUser.save(function(err) { //save to mongo
                      if (err) throw err;
                      return done(null, newUser ,{ message: 'You successfully signed up.' });
                  });
              }
          });
        });
    }));
    passport.use(new FacebookStrategy({
        clientID: configAuth.facebookAuth.clientID,
        clientSecret: configAuth.facebookAuth.clientSecret,
        callbackURL: configAuth.facebookAuth.callbackURL
        },
        function(accessToken, refreshToken, profile, done){
              process.nextTick(function(){User.findOne({'facebook.id': profile.id},
                function(err, user){ if(err) return done(err); if(user) return done(null, user); else {
                      var newUser = new User();
                      newUser.facebook.id = profile.id;
                      newUser.facebook.took = accessToken;
                      newUser.facebook.name = profile.name.givenName + '' + profile.name.familyName;
                      //newUser.facebook.email = profile.emails[0].value;

                  newUser.save(function(err){
                    if(err)
                      throw err;
                    return done(null, newUser);
                  })
                  console.log(profile);
            };

          });
        });
    }));


 // function(token, tokenSecret, profile, done){
 //        return done(null, profile);








 //        }))





};
