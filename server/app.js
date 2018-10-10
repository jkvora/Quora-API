//Require Modules
var express = require("express");
var config = require("./config");
var api = require("./api/QuoraApi");

//Init express App
var app = express();

// Add headers
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Pass to next layer of middleware
  next();
});

//Use all routes from routes.js
app.use("/api", api);
app.use(express.static(__dirname + "./../public/dist"));

app.get("/", function(req, res) {
  res.sendFile("index.html");
});

//Listen TO Port mentioned in config file
var port = config.PORT;
app.listen(port, function() {
  console.log("Server is running at port no :" + port);
});
