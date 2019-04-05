/*Assignment: 
Create a program that prints a list of files in a given directory, filtered by the extension of the files. You will be provided a directory name as the first argument to your program (e.g. '/path/to/dir/') and a file extension to filter by as the second argument.

For example, if you get 'txt' as the second argument then you will need to filter the list to only files that end with .txt. Note that the second argument will not come prefixed with a '.'.

Keep in mind that the first arguments of your program are not the first values of the process.argv array, as the first two values are reserved for system info by Node.

The list of files should be printed to the console, one file per line. You must use asynchronous I/O.

You must use asynchronous I/O.
*/

//EX INPUT: node program.js /path/to/dir/ js

//You may also find node's path module helpful, particularly the extname method. https://nodejs.org/api/path.html#path_path_extname_path

//allows you to work with the file system on your computer
var fs = require('fs')
//provides utilities for working with file and dir paths
var path = require('path')
var fileType = ('.' + process.argv[3])

//The fs.readdir() method takes a pathname as its first argument and a callback as its second. The callback signature is: function callback (err, list) { /* ... */ }
fs.readdir(process.argv[2], function callback(err, list) {
	//array.forEach(function(element)) will loop through an array with the function's element being the limiter
	list.forEach(function (file) {
		//.extname declares the extension name of path
		//Here I compare it to the given 4th argument
		if (path.extname(file) === fileType)
			//prints the file name if it contains the given extension
			console.log(file)
	})
})
