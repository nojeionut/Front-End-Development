// 1. Arithmetic operators

let x;

x = 5 + 5;
console.log(x); // 10

x = 5 - 5;
console.log(x);

x = 5 * 5;
console.log(x);

x = 5 / 5;
console.log(x);

x = 5 % 5;
console.log(x);


// 2. Concatenation (+ has 2 uses in javascript, one for addition, one for concatenation)

x = 'Salutare' + ' Ionut';
console.log(x);

// 3. Exponent operator

x = 2 ** 3;
console.log(x);

// 4. Increment / Decrement operators

x = x + 1;
console.log(x);

x++;
console.log(x);

x = x - 1;
console.log(x);

x--;
console.log(x);


// 5. Comparison operator

// ==
x = 4 == 4;
console.log(x);

// same as
x = 4;

if(x == 4)
    {
        console.log("true");
    }
else
    {
    console.log("false");
    }


// ===

x = 4 == '4'; // == evaluates only the value, not the type of the variable
console.log(x);

x = 4 === '4' // === evaluates the values, but also the type of the variables
console.log(x);


// !

x = 21 != 20;
console.log(x);

x = 20 != 20;
console.log(x);

x = 21 !== '21';
console.log(x);



// < >

x = 4 < 5;
console.log(x);

x = 4 > 1;
console.log(x);

