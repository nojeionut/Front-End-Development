////////////////////////////////////////////////////////////////////////////////////////////////////////
// exercise with both reduce() and filter() methods
// 
/*
const groceries = 
[
    {name: 'Bananas', type: 'Fruit', price: 2, quantity: 3},
    {name: 'Apples', type: 'Fruit', price: 1, quantity: 5},
    {name: 'Carrots', type: 'Vegetable', price: 1, quantity: 10},
    {name: 'Potatoes', type: 'Vegetable', price: 2, quantity: 5},
    {name: 'Onions', type: 'Vegetable', price: 1, quantity: 3},
    {name: 'Oranges', type: 'Fruit', price: 2, quantity: 4}
]

let sum_fruits = groceries.filter((groceries) => groceries.type === "Fruit").reduce((sum, curr) => sum += curr.quantity * curr.price, 0);
console.log(`The total price of fruits is: ${sum_fruits}`);

let sum_vegetables = groceries.filter((groceries) => groceries.type === "Vegetable").reduce((sum, curr) => sum += curr.quantity * curr.price, 0);
console.log(`The total price of vegetables is: ${sum_vegetables}`);
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////
// get the middle character of a string

/*
function getMiddle(s) {
    if (s.length % 2 === 0)
    {
        return s.slice(s.length / 2 - 1, s.length / 2 + 1);
    }
      return s.charAt(s.length / 2);
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////
// return the number from a binary array
/*
const binaryArrayToNumber = arr => {
    return arr.reverse().reduce((acc, curr, index) => curr === 1 ? acc + Math.pow(2, index) : acc, 0);
};

console.log(binaryArrayToNumber([0, 0, 0, 1])); // 1
console.log(binaryArrayToNumber([0, 0, 1, 0])); // 2
console.log(binaryArrayToNumber([1, 1, 1, 1])); // 15
console.log(binaryArrayToNumber([0, 1, 1, 0])); // 6

*/
////////////////////////////////////////////////////////////////////////////////////////////////////////
// return the number of cakes that can be made with the available ingredients
//  let recipe = {flour: 500, sugar: 200, eggs: 1};
//  let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
/*
function cakes(recipe, available) {
    let min = Infinity;
    for (let ingredient in recipe)
    {
        if(!available[ingredient]) return 0;
        let cakes = Math.floor(available[ingredient] / recipe[ingredient]);
        if(cakes < min) min = cakes;
    }
    
    return min;
}

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})); // 2

function cakes2(recipe, available) {
    return Math.min(...Object.keys(recipe).map(key => Math.floor(available[key] / recipe[key] || 0)));
}
console.log(cakes2({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200})); // 2
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////
// create a phone number from an array of numbers
/*
function createPhoneNumber(numbers){
  string_numbers = numbers.join('');
  return `(${string_numbers.slice(0,3)}) ${string_numbers.slice(3,6)}-${string_numbers.slice(6,10)}`;
}

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0])); // (123) 456-7890
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////
// return the longest subsequence of consecutive numbers in an array with the maximum sum of the elements
/*
var maxSequence = function(arr){
    let max_sum = 0;
    let current_sum = 0;
    for(let i = 0; i < arr.length; i++)
    {
        current_sum = Math.max(0, current_sum + arr[i]);
        max_sum = Math.max(max_sum, current_sum);
    }
    return max_sum;
}

console.log(maxSequence([-2,1,-3,4,-1,2,1,-5,4])); // 6
*/


////////////////////////////////////////////////////////////////////////////////////////////////////////
// return the number that appears in the array an odd number of times
/*
function findOdd(A) 
{
    let obj_entries =  Object.entries(A.reduce((acc, curr) => {acc[curr] ? acc[curr] += 1 : acc[curr] = 1;
        return acc;
    }, {}));

    for(let [index, value] of obj_entries)
    {
        if(value % 2 !== 0) return parseInt(index);
    } 
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])); // 5
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////
// 
/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = numbers.filter((number) => number > 5).map((number) => number * 2).reduce((sum, curr) => {return sum += curr}, 0);

console.log(sum); // 80

function sumNumbers(numbers)
{
    return (
        ` The sum is: ${numbers.filter((number) => number > 5).map((number) => number * 2).reduce((sum, curr) => {return sum += curr}, 0)}
        `
    );
}

console.log(sumNumbers(numbers)); // 80

*/



// reduce() method
/*
const cars = [
    {"make": "Ford", "model": "Fiesta", "year": 1999, "color": "red"},
    {"make": "Ford", "model": "Focus", "year": 2000, "color": "blue"},
    {"make": "Ford", "model": "Mustang", "year": 1964, "color": "black"},
    {"make": "Chevrolet", "model": "Camaro", "year": 1967, "color": "red"},
    {"make": "Chevrolet", "model": "Cruze", "year": 2010, "color": "red"},
    {"make": "Chevrolet", "model": "Silverado", "year": 2015, "color": "blue"},
    {"make": "Chevrolet", "model": "Impala", "year": 2016, "color": "black"},
    {"make": "Dodge", "model": "Charger", "year": 2017, "color": "red"},
    {"make": "Dodge", "model": "Challenger", "year": 2018, "color": "blue"},
    {"make": "Dodge", "model": "Durango", "year": 2019, "color": "black"},
];
// count the number of cars by make and color

let carCountColor = cars.reduce((acc, curr) => {
    return acc[curr.make] ? 
    {...acc, [curr.make]: {...acc[curr.make], [curr.color]: acc[curr.make][curr.color] ? 
        acc[curr.make][curr.color] + 1 : 
        1}} 
    :
     {...acc, [curr.make]: {[curr.color]: 1}};
}, {});
console.log(carCountColor);
*/



/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = numbers.reduce((sum, curr) => curr % 2 === 0 ? sum + curr : sum, 0);
console.log(sum); // 30

let prod = numbers.reduce((prod, curr) => prod * curr, 1);
console.log(prod);
*/

