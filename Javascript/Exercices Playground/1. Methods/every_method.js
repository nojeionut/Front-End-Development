//learning about every() method
//The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

//Example 1
const isBelowThreshold = (currentValue) => currentValue < 6;
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.every(isBelowThreshold));

//Example 2
const persons = 
[
    {name: 'John', age: 21, occupation: 'Developer'},
    {name: 'Jane', age: 21, occupation: 'Designer'},
    {name: 'Jack', age: 21, occupation: 'Manager'},
    {name: 'Jill', age: 21, occupation: 'CEO'},
    {name: 'James', age: 21, occupation: 'Developer'},
    {name: 'Jenny', age: 21, occupation: 'Developer'},
];

const isDeveloper = (person) => person.occupation === "Developer";
console.log(persons.every(isDeveloper));

const is21 = (person) => person.age === 21;
console.log(persons.every(is21));