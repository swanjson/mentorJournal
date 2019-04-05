//Assignment: Write a program that accepts one or more numbers as command-line arguments and prints the sum of those numbers to the console (stdout).  

//The "argv" array contains everything given on the command line. The first item (argv[0]) will be the path to node itself, and the second item (argv[1]) will be the path to your script code. So a slice starting at 2 will discard both of those and return everything else that was typed on the command line. These are the arguments that will be used to construct the API query string.

//Starts an array of argument variables
var args = process.argv.slice(2);
//initializes total
total =0;
//for loop with index variable i that loops through args
for(var i in args){
	//args is getting summed by indexing each argument. the + prefix beforehand turns the string arguments into numbers
	total += +(args[i]);
}
//prints the total
console.log(total)