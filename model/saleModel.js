var mongoose = require('mongoose');

var SaleSchema = new mongoose.Schema({
  name: {type:String},
  address: {type:String},
  date:{type:Date, default:'8/1/2016'}
})

module.exports = mongoose.model("Sale", SaleSchema);
