console.log("Hello, Noje learns javascript here!");

let firstName = "Noje";
let lastName = "Ionut";
let age = 23;
const sex = "Male";

console.log(firstName, lastName, age, sex);
console.log(firstName + " " + lastName + " is " + age + " years old " + sex );


// A constant variable can't be changed, but the value of the array or object can be changed using methods
console.group("Const array/object");
const array = [1,2,3,4,5];
console.log(array);
array.push(6);
console.log(array);
array.push(21);
console.log(array);
console.groupEnd();

console.group("Const object");
const person = 
{
    name: "Noje",
    age: 23,
    sex: "Male",
}
console.log(person);
person.age = 24;
console.log(person);
person.name = "Ionut";
console.log(person);
console.groupEnd();