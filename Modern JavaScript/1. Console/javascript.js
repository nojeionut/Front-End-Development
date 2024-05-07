// pop-up 
//alert('Hello from the javascript file')

// number
console.log(123)
// text
console.log("hello world")
// number, text, boolean
console.log(123,"hello", true)


// log a variable
let myVar = "I am a variable"
console.log(myVar);

// show error
console.error("This is an error");

// show warning
console.warn("This is a warning");

// console clear
//console.clear();

// console table
console.table({name: 'Noje', city: 'tgm'})

// console group
console.group('Group name');
console.warn('warning!');
console.error('error here');
console.log('Hello World');
console.groupEnd('group end');
console.log('new section');

// console log with style
console.log("%c This is some styled text","color:red; font-size:50px");
const styles = 'padding: 10px; background-color: white; color: green;';
console.log('%cHello', styles);