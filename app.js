//Require Modules
var express=require('express');
var config = require('./config');
var routes = require('./routes/QuoraApi');

//Init express App
var app=express();

//Use all routes from routes.js
app.use('/',routes);


//Listen TO Port mentioned in config file
var port=config.PORT;
app.listen(port,function() {
console.log("Server is running at port no :"+ port);
});
