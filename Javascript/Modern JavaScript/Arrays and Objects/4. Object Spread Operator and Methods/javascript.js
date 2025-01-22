const person_information = 
{
    first_name: "Noje",
    last_name: "Ionut",
    age: 23,
    gender: "Male",
    height: "1.80m"
};

const person_occupation = 
{
    job: "Web Developer",
    company: "Google",
    salary: 5000
};

const person_hobbies = 
{
    hobbies: ["gym", "play guitar", "music"]
};

const more_hobbies = ["dreaming", "swimming", "coding"];

// using the array methods on hobbies array

person_hobbies.hobbies.push("reading");
console.log("Pushing a new hobby to the hobbies array at the end: " + person_hobbies.hobbies[person_hobbies.hobbies.length - 1]);
console.log(person_hobbies.hobbies);

console.log("Poping the last hobby from the hobbies array at the end: " + person_hobbies.hobbies[person_hobbies.hobbies.length - 1]);
person_hobbies.hobbies.pop();
console.log(person_hobbies.hobbies);

console.log("Unshifting a new hobby to the hobbies array at the beginning: " + person_hobbies.hobbies.unshift("reading"));
console.log(person_hobbies.hobbies);

console.log("Shifting the first hobby from the hobbies array at the beginning: " + person_hobbies.hobbies.shift());
console.log(person_hobbies.hobbies);

console.log(person_hobbies.hobbies.includes("gym"));

person_hobbies.hobbies = person_hobbies.hobbies.concat(more_hobbies).reverse();


// the old way
//const person_complete = Object.assign({}, person_information, person_occupation, person_hobbies);

const person_complete = {...person_information, ...person_occupation, ...person_hobbies};

console.log(person_complete);

// array of keys from the object

const keys_object = Object.keys(person_complete);
console.log(keys_object);

const values_object = Object.values(person_complete);
console.log(values_object);

const entries_object = Object.entries(person_complete);
console.log(entries_object);

console.log(entries_object[8][1][1]);


