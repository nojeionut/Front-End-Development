console.log(5 + '5'); // 55
console.log(5 - '5'); // 0
console.log(5 * '5'); // 25
console.log(5 / '5'); // 1
console.log(5 % '5'); // 0



const name = "noje";
const age = 23;

console.log(`My name is ${name} and I am ${age} years old.`); // My name is noje and I am 23 years old.


const propozitie = "hello world";
console.log(propozitie.length); // 11
console.log(propozitie.toUpperCase()); // HELLO WORLD
console.log(propozitie.toLowerCase()); // hello world
console.log(propozitie.substring(0, 5)); // hello
console.log(propozitie.substring(6)); // world
console.log(propozitie.split('')); // ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
console.log(propozitie.indexOf('w')); // 6

console.log(propozitie.replace("world", "noje")); // hello noje

// challange

const myString = 'developer';

console.log(myString); 

const first_letter = myString.slice(0,1).toUpperCase();
const rest = myString.slice(1);
console.log(first_letter + rest); // Hello world

const result = myString.charAt(0).toUpperCase() + myString.slice(1);
console.log(result);