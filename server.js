var http = require("http");
var express = require("express");
var app = express();

//setup the view engine
app.set("view engine", "vash");

app.get("/", function(req,res) {
	//res.send("<htmL><body><h2>express is working now</h2></body></html>")
	res.render("vash/index", {title: "Express + Vash"});
});

app.get("/api/users",function(req,res) {
	res.set("Content-Type", "application/json");
	res.send({name: "Brent", isValid:true, group: "Admin"});
});

var server = http.createServer(app);

server.listen(3000);