var UserModel = require('./../model/userModel');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var mongoose = require('mongoose');

module.exports = {

	login: function(req, res, next){
		passport.authenticate('local-login', function(err, user, info){
			if(err) { return next(err); }
			if(!user) { return res.json({ message: "Please enter your Email & Password "}) } //{ return res.status(404).json(info.message) }
			req.login(user, function(err){
				if(err) { return next(err); }
				return res.json({ message: 'You logged in like a champ!', user: user });
			});
		})(req, res, next);

	},

	signup: function(req, res, next){
		passport.authenticate('local-signup', function(err, user, info){
			//console.log('You signed up.', info);
			if(err) { return next(err); }
			if(!user) { return res.json({ message: "Please enter a Email & Password "}) } //{ return res.status(404).json(info.message); }
			req.login(user, function(err){
				if(err) { return next(err); }
				return res.json({ message: 'You signed up like a champ!', user: user });
			})
		})(req, res, next);
	},

	loginfacebook: function(req, res, next){
		passport.authenticate('facebook', function(err, user, info){
			// console.log(this);
			if(err) { return next(err); }
			if(!user) { return res.status(404).json(info.message) }
			req.login(user, function(err){
				if(err) { return next(err); }
				return res.json({ message: 'You logged into FaceBook like a champ!', user: user });
			});
		})(req, res, next);

	},

	update: function(req, res, next){

		UserModel.findByIdAndUpdate(req.params.id, req.body, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
	},

	logout: function(req, res, next){
		 req.session.destroy();
		 req.logout();
		 //res.redirect('/');
		 res.json({message: 'You logged out like a champ!'});
		 console.log("Signout");

	},

	delete: function(req, res, next){
	UserModel.findByIdAndRemove(req.params.id, req.body, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
		}
		});
	},

	getAllUsers: function(req, res){
		UserModel.find().exec(function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		})
	},
	getOneUser: function(req, res){
		if(req.user) {
			console.log(req.user)
			UserModel.findById({
				_id: req.user._id
			},
			function (err, user ){
				if(err){
					return console.log(err);
				} else {
					res.json(user)
				}
		});
	} else {
			res.json({
				user:"anonymous"
			})
		}

	},
	addSale: function(req, res){
		console.log(req.body);
		UserModel.findByIdAndUpdate(
			req.params.id,
			{$push: {"sale":req.body}},
			{safe: true, upsert: true},
			function(err, model){
				if(err) console.log(err);
				res.send(model);
			}
		)
	},
	updateSale: function(req, res){
		console.log(req.body);
		UserModel.findByIdAndUpdate(
			req.params.id,
			{$set: {"sale":req.body}},
			{safe: true, upsert: true},
			function(err, model){
				console.log(err);
				res.send(model);
			}
		)

}

};
