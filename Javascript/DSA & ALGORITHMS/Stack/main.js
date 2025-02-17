import Stack from './stack.js';

let stack = new Stack(21);
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

console.log(stack.printStack());
console.log(stack.pop());
console.log(stack.printStack());
console.log(stack.peek());
console.log(stack.printStack());
console.log(stack.pop());
console.log(stack.printStack());
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.printStack());
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.printStack());
console.log(stack.isEmpty());