const http = require("http");
const fs = require("fs");
const url = require("url");

const lookup = require("mime-types").lookup;
const port = process.env.PORT || 8080;

const server = http.createServer(function(req,res){
	let parsedURL = url.parse(req.url, true);
	let path = parsedURL.path.replace(/^\/+|\/+$/g, "");

	if(path == ""){
		path = "index.html"
	}

	console.log("Request To: " + path);

	let file = __dirname + "/pub/" + path
	fs.readFile(file, function(err, data){
		if(err){
			res.writeHead(404);
			res.write("Error File Now Found");
			console.log(err);
			res.end();
		}else{
			let mime = lookup(path);
			res.writeHead(200, {"Content-Type": mime})
			res.write(data);
			res.end();
		};
		
	})
});

server.listen(port, function(err){
	if(err){
		console.log("ERROR ", err);
	}else {
		console.log("Live Server :: " + port);
	};
});