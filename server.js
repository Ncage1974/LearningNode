var http = require("http");
var express = require("express");
var app = express();

app.get("/", function(req,res) {
	res.send("<htmL><body><h2>express is working now</h2></body></html>")
});

app.get("/api/users",function(req,res) {
	res.send({name: "Brent", isValid:true, group: "Admin"});
});

var server = http.createServer(app);

server.listen(3000);