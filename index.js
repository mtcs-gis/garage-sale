var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config.js');


var app = express();
app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));

mongoose.connect(
  "mongodb://localhost:27017/sales"
)

mongoose.connection.once('open', function(){
  console.log('We have data');
})

app.listen(config.port, function(){
  console.log('The server is on', config.port)
})
