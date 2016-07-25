var mongoose = require('mongoose');


// function validator (v) {
//   return v.length > 1;
// };

var saleSchema = new mongoose.Schema({
	SaleName: {
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
		type: String, 
		require: true
		},
	endTime:{
		type: String, 
		require: true
		},
	saleLoc: {
		type: Number,
		require: true 
		},
	saleComments: {
		type: String 
		} 


});

module.exports = trailLogSchema;