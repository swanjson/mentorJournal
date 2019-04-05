//Assignment: Write a program that uses a single synchronous filesystem operation to read a file and print the number of newlines (\n) it contains to the console (stdout), similar to running cat file | wc -l. The full path to the file to read will be provided as the first command-line argument (i.e., process.argv[2]). You do not need to make your own test file.  

//loads the filesystem operation
var fs = require('fs');

//Grabs the filename from the 3rd argument
var fileName = process.argv[2];

//this method returns a Buffer object containing the complete contents of the file. Buffer objects are Node's way of efficiently representing arbitrary arrays of data
//Buffer objects can be converted to strings by simply calling the toString() method on them. e.g. var str = buf.toString().
testFile = fs.readFileSync(fileName);

//creates variable buffer of strings
testFileStrings = testFile.toString();

//counts and prints the amount of new lines in the file
console.log(testFileStrings.split('\n').length - 1);

// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1


