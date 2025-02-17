// learning about the .reduce() method
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// example 1 - sum of all elements in an array
const array = [1,1,2,3,4,5,5,6,10];
const sum = array.reduce((acc, current) => acc + current, 0);
console.log(sum);

// example 2 - sum of all even numbers in an array
const sum_even_num = array.reduce((acc, current) => current % 2 == 0 ? acc + current : acc, 0);
console.log(sum_even_num);

// example 3 - sum of all odd numbers in an array
const sum_odd_num = array.reduce((res, curr) => (curr % 2 !== 0) ? res + curr : res, 0);
console.log(sum_odd_num);

// example 4 - return an object with the number of times each element appears in the array
const res_obj = array.reduce((acc, curr) => {acc[curr] ? acc[curr] += 1 : acc[curr] = 1;
                            return acc;
                            }, {});
console.log(res_obj);

for(let key in Object.keys(res_obj)){
    if(res_obj[key] > 1){
        console.log(key);
    }
}

// example 5 - return the maximum number in an array   

const max_value = array.reduce((acc, curr) => curr > acc ? acc = curr: curr, 0);
console.log(max_value);

