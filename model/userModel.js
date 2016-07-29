var mongoose = require('mongoose');
var SaleSchema = require('./saleSchema.js');

var bcrypt = require('bcrypt-nodejs'); //encrypts the password

var UserSchema = new mongoose.Schema({

	local: {
		userName: {type: String, required: true, unique: true},
		firstName: {type: String},
		lastName: {type: String},
		selfEmail: {type: String},
		password: {type: String, required: true}
	},
	facebook:{
		id: String,
		token: String,
		email: String,
		name: String
	},
	role: {
		type: String,
		required: false,
		default: 'User'
	},
	loggedin: {
		type: Boolean
	},
	salePost: [SaleSchema]

});

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null); //encrypts password and does so 8 times. Default is 10. More encryptions means more time to process
};

UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password); //compares the given password with the encrypted stored password
};


module.exports = mongoose.model('User', UserSchema);
