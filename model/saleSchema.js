var mongoose = require('mongoose');


var saleSchema = new mongoose.Schema({
	name: {
		type: String,
		validate: /[a-z]/,
		require: true
		},
	startDate: {
		type: Date,
		require: true
		},
	endDate:{
		type: Date,
		require: true
		},
	startTime:{
		type: String
		},
	endTime:{
		type: String
		},
	address: {
		type: String,
		require: true
		},
	lat:{
		type: Number
	},
	lng:{
		type: Number
	},
	saleComments: {
		type: String
	}
});

module.exports = saleSchema
