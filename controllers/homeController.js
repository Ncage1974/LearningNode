(function(homeController) {
	homeController.init = function(app) {
		app.get("/", function(req,res) {
			//res.send("<htmL><body><h2>express is working now</h2></body></html>")
			res.render("vash/index", {title: "Express + Vash"});
		});	
	};
})(module.exports);