// Primitive Data Types

const namee = 'ionut';
const age = 23;
const gender = 'M';
const hasGf = false;
const hasBrain = null;
let hasMoney;
const number = 9007199254740991n;

console.log(`My name is ${namee} and I am ${age} years old ${gender}.`);

if (hasGf == true) {
    console.log('I have a girlfriend');
} else {
    console.log("Don't worry, I don't have a girlfriend");
}

console.log(typeof(namee));
console.log(typeof(age));
console.log(typeof(gender));
console.log(typeof(hasGf));
console.log(typeof(hasBrain));
console.log(typeof(hasMoney));
console.log(typeof(number));


// Reference Data Types (Objects)

const person = {
    name: "John Doe",
    age: 30,
    city: "New York"
}

console.log(typeof(person));

const arr = [1,2,3]

console.log(typeof(arr));
function showPersonInfo({name, age}){
    console.log(`${name} is ${age}`);
}

console.log(typeof(showPersonInfo))

