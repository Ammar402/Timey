//Bsic require import nodejs
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");

//create instance of express and instantiate bodyParser and cors
var app = module.exports = express();
app.use = (bodyParser.json());
app.use = (cors());

app.get("/dateValues/:dateVal",function(req,res,next){
var dateVal = req.params.dateVal;

req.json({unix:dateVal});
});


app.listen(3000,function(){
  console.log("WHATS");
});
