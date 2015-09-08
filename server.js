var http = require("http");
var express = require("express");
var app = express();
var ejsEngine = require("ejs-locals");

//setup the view engine
app.engine("ejs", ejsEngine ); //support master pages
app.set("view engine", "ejs");

app.get("/", function(req,res) {
	//res.send("<htmL><body><h2>express is working now</h2></body></html>")
	res.render("ejs/index", {title: "Express + EJS"});
});

app.get("/api/users",function(req,res) {
	res.set("Content-Type", "application/json");
	res.send({name: "Brent", isValid:true, group: "Admin"});
});

var server = http.createServer(app);

server.listen(3000);