// server.js
// where your node app starts

// init project
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')


var app = module.exports = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));


app.use(bodyParser.json());
app.use(cors());

app.get('/dateValues/:dateVal', function(req,res,next){
  //takes in request data
  var dateVal = req.params.dateVal;
  
  var dateFormattingOptions = {
  year: 'numeric',
  month: 'long',
  date: 'numeric'
  };
  
  if(isNaN(dateVal)){
  var naturalDate = new Date(dateVal);
  naturalDate = naturalDate.toLocaleDateString("en-us", dateFormattingOptions);
  var unixDate = new Date(dateVal).getTime()/1000; 
  }
  else{
  var unixDate = dateVal;
  var naturalDate = new Date(dateVal * 1000);   
  naturalDate = naturalDate.toLocaleDateString("en-us", dateFormattingOptions);    
  }
  
  res.json({unix: unixDate, natural: naturalDate});

  
  
});


const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})