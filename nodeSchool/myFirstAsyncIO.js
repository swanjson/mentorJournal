//Assignment: Write a program that uses a single asynchronous filesystem operation to read a file and print the number of newlines it contains to the console (stdout), similar to running cat file | wc -l. The full path to the file to read will be provided as the first command-line argument.

//The solution to this problem is almost the same as the previous problem except you must now do it the Node.js way: asynchronous.

//Instead of fs.readFileSync() you will want to use fs.readFile() and instead of using the return value of this method you need to collect the value from a callback function that you pass in as the second argument. To learn more about callbacks, check out:

var fs = require('fs')
var lines = undefined

function getLines(callback) {
	//readFile is passed the 3rd argument and the callback function
	fs.readFile(process.argv[2], 'utf8', function doneReading(err, fileContents) {
	lines = fileContents.split('\n').length - 1
	callback()
})
}
function logLines(){
	console.log(lines)
}
getLines(logLines)

/*Official solution:

var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
  if (err) {
    return console.log(err)
  }
  // fs.readFile(file, 'utf8', callback) can also be used
  var lines = contents.toString().split('\n').length - 1
  console.log(lines)
})

*/