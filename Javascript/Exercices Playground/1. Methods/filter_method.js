// learning the .filter() method
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.



const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// example 1 - filter out even numbers
const even_numbers = array.filter((number) => number % 2 === 0);
console.log(even_numbers);

// example 2 - filter out odd numbers
const odd_numbers = array.filter((number) => number % 2 !== 0);
console.log(odd_numbers);

// example 3 - filter out numbers greater than 5
const numbers_grater_than_5 = array.filter((number) => number > 5);
console.log(numbers_grater_than_5);

const users = [
    { name: 'John', age: 34 , hobbies: ['reading', 'swimming'] },
    { name: 'Jane', age: 16, hobbies: ['running', 'cooking'] },
    { name: 'Bob', age: 42, hobbies: ['dancing', 'singing'] },
    { name: 'Alice', age: 21, hobbies: ['coding', 'painting'] },
    { name: 'Maurice', age: 44, hobbies: ['reading', 'swimming'] },
    { name: 'Alice', age: 17, hobbies: ['running', 'cooking'] },
]
// example 4 - filter out users who are older than 30
const users_over_30 = users.filter((user) => user.age > 30);
console.log(users_over_30);

// example 5 - filter out users who are older than 30 and have 'reading' as a hobby
const users_over_30_and_reading = users.filter((user) => user.age > 30 && user.hobbies.includes("reading"))
console.log(users_over_30_and_reading);

