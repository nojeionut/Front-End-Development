// traditional function

function add1(a, b)
{
    return a + b;
}

// arrow function

const add2 = (a,b) => a + b;

console.log(add1(1,2));
console.log(add2(1,2));

const array = [1,2,3,4,5];

const add_array = (array) =>
{
    let sum = 0;
    array.forEach((element) => sum += element);
    return sum;
}

console.log(add_array(array));