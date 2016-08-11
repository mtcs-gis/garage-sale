var mongoose = require('mongoose');

var SaleSchema = new mongoose.Schema({
  _user : { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  name: {type:String},
  address: {type:String},
  lat: {type:Number},
  lng: {type:Number},
  date:{type:Date, default:Date.now()},
  comment: {type:String}
})

module.exports = mongoose.model("Sale", SaleSchema);
