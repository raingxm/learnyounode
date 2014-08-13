var fs = require('fs');
var path = require('path');
var directoryPath = process.argv[2];
var fileExtension = process.argv[3];

fs.readdir(directoryPath, function (err, files) {
	if(err) throw err;
	for(var i = 0; i < files.length; i++) {
		if(path.extname(files[i]) === "." + fileExtension) {
			console.log(files[i]);
		}
	}
});