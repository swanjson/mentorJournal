var numbers = [1,2,3,4,5,6,7,8,9,10];
//This is interesting because i'm passing function to a built-in function. It's checking the modulus of the number to see if it's even. then returning true/false. so i'm guessing that .filter() takes a true/false and pops the false and keeps the true.
var filtered = numbers.filter(evenNumbers)
function evenNumbers (number){
	return number % 2 === 0;
}
console.log(filtered)

