console.log("Type conversion");

// Convert number to string

let number = 100;

// output = number.toString(); // metoda aplicata la un tip de date primitiv, pentru aceasta a fost folosit automat un wrapper object
// output = String(number); 
// output = number + ""; // concatenare cu un string gol


// Convert string to number
let string = "100";

// output = parseInt(string); // converteste stringul in numar intreg
// output = Number(string);
// output = +string; // unary operator


// Convert boolean to number
let boolean = true;
// output = Number(boolean); // true = 1, false = 0

output = Boolean(1); // true


console.log(output, typeof output);
