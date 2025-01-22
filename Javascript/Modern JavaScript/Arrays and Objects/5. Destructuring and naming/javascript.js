// Destructuring an object

const person = {
    name: 'John',
    age: 30,
    occupation: 'Developer',

}

const {name, occupation} = person;
console.log(name);
console.log(occupation);


const person2 = {

    name: 'John',
    age: 30,
    occupation: 'Developer',
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        },
    hobbies: ['music', 'sports', 'reading', 'coding'],
}

const {name: nume, age: varsta, occupation: ocupatie, address: {street: strada, city: oras, state: judet}, hobbies: hobiuri} = person2;

console.log("Nume: " + nume + " Varsta: " + varsta + " Ocupatie: " + ocupatie + " Strada: " + strada + " Oras: " + oras + " Judet: " + judet);

console.log(hobiuri);

const [hobby1, hobby2, ...rest] = person2.hobbies;

console.log(hobby1);
console.log(hobby2);
console.log(rest);

