var http = require("http");

http.get(process.argv[2], function(response) {
	var resData = "";

	response.on("data", function(chunk) {
		resData += chunk;
	});

	response.on("end", function() {
		console.log(resData.length);
		console.log(resData);
	});
});