// primitive values are stored on the stack

let name = "noje";



// reference values are stored on the heap

const person = {
    name: "ionut",
    age: 23
}


// tests

let newName = name;
name = "numenou"

let newPerson = person;
newPerson.name = "numenou"

console.log(name, newName);
console.log(person.name, newPerson.name)


