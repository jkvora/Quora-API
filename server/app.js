//Require Modules
var express = require('express');
var config = require('./config');
var api = require('./api/QuoraApi');

//Init express App
var app = express();

//Use all routes from routes.js
app.use('/api', api);
app.use(express.static(__dirname + './../public/dist'));





app.get('/',function(req,res){
        res.sendFile('index.html')
})

//Listen TO Port mentioned in config file
var port = config.PORT;
app.listen(port, function () {
    console.log("Server is running at port no :" + port);
});
