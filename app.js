
var express = require('express');
var mongoose = require('mongoose');

var app = express();

//DB setup
mongoose.connect('mongodb://mongo:27017');

app.get('/', function(req, res){
  res.send("Hello World");
});

app.listen(9000, function(){
  console.log('Example app listening on port 9000!');
});
