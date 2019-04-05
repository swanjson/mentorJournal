//this should be completely variable and self contained.

var fs = require('fs')
var path = require('path')

module.exports = function (directory, extension, callback) {
	fs.readdir(directory, function (err, list) {
		if (err) return callback(err); // early return
		else {
			list = list.filter(function (file) {
				if (path.extname(file) === '.' + extension) return true;
			})
			return callback(null, list);
		}
	})
}