const person = {
    firstname: "Noje",
    lastname: "Ionut",
    age: 23,
    occupation: "Student",
    hobbies: ["music", "gym", "coding"],
    address: {
        street: "str. Mihai Eminescu",
        city: "Bucuresti",
        country: "Romania",
    },
    
    greet() {
        console.log("Hello, my name is " + this.firstname + " " + this.lastname + " and I am " + this.age + " years old.");
    }
}

console.log(person.greet());
console.log(person["address"]["city"]);
person.lastname = "popescu";

console.log(person.greet());
