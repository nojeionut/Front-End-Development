function registerUser(user)
{
    return user + " is registeres";
};

console.log(registerUser("Ionut"));

function sum(...numbers)
{
    let total = 0;

    for(const num of numbers)
    {
        total += num;
    }

    return total;
}

// for on loop iterates over the values fo the array not the indexes
// for in loop iterates over the indexes of the array

console.log(sum(1, 2, 3, 4, 5));


const person = 
{
    name: "Ionut",
    age: 23,
    address:
    {
        street: "Strada 1",
        city: "Bucuresti",
        country: "Romania",
    },
    hobbies: ["music", "movies", "sports"],
}

function print_person(person)
{
    console.log(person.name);
    console.log(person.age);
    console.log(person.address.street);
    console.log(person.address.city);
    console.log(person.address.country);
    console.log(person.hobbies);
}

print_person(person);





