var saleModel = require('./../model/saleModel.js');

module.exports = {
  create: function(req, res){
    var sale = new saleModel(req.body);
    sale.save(function(err, result){
      if(err){
        res.send(err);
      }
      res.send(result)
    });
  },
  read: function(req, res){
    saleModel
    .find(req.query)
    .exec(function(err, result){
      if(err){
        res.send(err)
      }
      res.send(result)
    })
  },
  readById: function(req, res){
    saleModel.findById(req.params.id, req.body, function(err, result){
      if(err){
        res.send(err)
      }
      res.send(result)
    })
  },
  update: function(req, res){
    saleModel.findByIdAndUpdate(req.params.id, req.body, function(err, result){
      if (err) {
        res.send(err);
      }
      res.send(result);
    })
  },
  delete: function(req, res){
    saleModel.findByIdAndRemove(req.params.id, req.body, function(err, result){
      if(err){
        res.send(err);
      }
      res.send(result);
    })
  }
}
