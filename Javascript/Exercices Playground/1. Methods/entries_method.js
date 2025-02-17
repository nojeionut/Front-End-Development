// learning about entries() method
// entries() method returns an iterator object with keys and values for each element in the array

const fruits = ['apple', 'banana', 'cherry'];
const vegetables = ['carrot', 'potato', 'onion'];
const cars = ['BMW', 'Audi', 'Mercedes'];
const person = 
[
    {name: 'John', age: 30, occupation: 'Developer'},
    {name: 'Jane', age: 25, occupation: 'Designer'},
    {name: 'Jack', age: 35, occupation: 'Manager'},
    {name: 'Jill', age: 40, occupation: 'CEO'}
];

const f = fruits.entries();
const v = vegetables.entries();

for(let i = 0; i < fruits.length; i++)
{
    console.log(f.next().value);
}

for(let element of v)
{
    console.log(element);
}

for(let [index, value] of cars.entries())
{
    console.log(index, value);
}

for(let [index, value] of person.entries())
{
    console.log(index, value);
}

