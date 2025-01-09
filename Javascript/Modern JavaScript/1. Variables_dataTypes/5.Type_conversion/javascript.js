// String to number
console.log("String to number");
let amount = '100'; // string
let amount_number = parseInt(amount); // number, for int values/ for float is parseFloat('99.5')
let amount_number_unary = +amount; // parsing the value using the unary operator
let amount_number_constructor = Number(amount); // using the Number constructor to parse the value



console.log(amount, typeof(amount));
console.log(amount_number, typeof(amount_number));
console.log(amount_number_unary, typeof(amount_number_unary));
console.log(amount_number_constructor, typeof(amount_number_constructor));


// Number to string
console.log("\n\nNumber to string");
let number = 21;
let number_toString = number.toString(); // number is not an object, but it has .toString() method, this is 
                                         // because it is a primitive value, but it is wrapped temporary in a class
let number_string_constructor = String(number);



console.log(number, typeof(number));
console.log(number_toString, typeof(number_toString));
console.log(number_string_constructor, typeof(number_string_constructor));




// Number to boolean
console.log("\n\nNumber to boolean");
let value = 1; // 1 for true, 0 for false
let value_boolean = Boolean(value); // true

console.log(value_boolean);