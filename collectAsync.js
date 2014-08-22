var http = require('http');
var bl = require('bl')
var urls = process.argv.slice(2);
var result = [];
var count = 0;

function outputData() {
	for(var i = 0; i < urls.length; i++) {
		console.log(result[i]);
	}
}

function collectUrl(index) {
	http.get(urls[index], function(response) {
		response.pipe(bl(function(err, data) {
			if(err) console.error(err);

			result[index] = data.toString();
			count++;

			if(count == urls.length) {
				outputData();
			}
		}));
	});
}

for(var i = 0; i < urls.length; i++) {
	collectUrl(i);
}

