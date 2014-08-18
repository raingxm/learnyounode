var fs = require('fs');
var path = require('path');

module.exports = function(directoryPath, filterStr, callback) {
	fs.readdir(directoryPath, function(err, files) {
		if(err) return callback(err);
		
		files = files.filter(function(file) {
			return path.extname(file) === "." + filterStr;
		});
		callback(null, files);
	});
}