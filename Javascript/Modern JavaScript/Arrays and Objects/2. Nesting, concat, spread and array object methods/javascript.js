const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
const berries = ['strawberry', 'blueberry', 'raspberry', 'blackberry'];

// push() method adds one element to the end of an array
fruits.push(berries);
console.log(fruits); // the berries array is nested inside the fruits array


const all_fruits = [fruits, berries];
console.log(all_fruits); // the berries array is not nested inside the fruits array

console.log(fruits);


const newFruits = fruits.concat(berries);
console.log(newFruits); // the berries array is not nested inside the fruits array

for(let i = 0; i < newFruits.length; i++) {
    console.log(newFruits[i]);
}

// Spread operator
const allFruits = [...fruits, ...berries];
console.log(allFruits); // the berries array is not nested inside the fruits array

for(let i = 0; i < allFruits.length; i++) {
    console.log(allFruits[i]);
}

console.log(Array.from('12345noje'));

console.log(Array.of(1,2,4,5,6,"noje"));
