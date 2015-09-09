var http = require("http");
var express = require("express");
var app = express();
var controllers = require("./controllers");

//setup the view engine
app.set("view engine", "vash");

controllers.init(app);

app.get("/api/users",function(req,res) {
	res.set("Content-Type", "application/json");
	res.send({name: "Brent", isValid:true, group: "Admin"});
});

var server = http.createServer(app);

server.listen(3000);