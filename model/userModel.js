var mongoose = require('mongoose');

var saleSchema = ('./saleSchema.js')

var bcrypt = require('bcrypt-nodejs'); //encrypts the password


var UserSchema = new mongoose.Schema({

	local: {
		userName: {type: String, unique: true},
		password: String
	},
    firstName: String,
    middleName: String,
    familyName: String,
    profilePic: String,
    homeAddress: String,
	facebook: {
        id         : String,
        token      : String,
        emails     : String,
        name       : String,
        birthday   : String,
        picture    : String,
        gender     : String,
        bio        : String,
        interests: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'Category'
        }],
    },
	role: {
		type: String,
		required: false,
		default: 'User'
	},
	loggedin: {
		type: Boolean
	},
    sale:[saleSchema]
});

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null); //encrypts password and does so 8 times. Default is 10. More encryptions means more time to process
};

UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password); //compares the given password with the encrypted stored password
};


module.exports = mongoose.model('User', UserSchema);
