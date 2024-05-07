// we will use let and const

// simple declarations
let firstName = 'Noje'
let lastName = 'Ionut'
let age = 23
const country = 'Romania'

// print the variables
console.log(`My name is ${firstName} ${lastName}. I am ${age} years old and I live in ${country}.`)


// Reassigning values
let x = 100;
console.log(x)
x = 200;
console.log(x)


// constants

const y = 100;
// y = 200; // this will give an error

const arr = [1,2,3,4];
arr[0] = 5; // this works because arrays are mutable
console.log(arr);

// array methods
const numbers = [1,2,3,4,5];
console.log(numbers);
numbers.push(6); // adds to the end of the array
console.log(numbers);


