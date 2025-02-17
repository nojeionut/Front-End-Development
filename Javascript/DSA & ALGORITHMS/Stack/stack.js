class Stack {
    constructor(maxSize = 10) { // Default maxSize to 10 if not provided
        this.maxSize = maxSize;
        this.items = [];
        this.top = -1;
        console.log("Stack created with max size:", this.maxSize);
    }

    push(element) {
        if (this.items.length === this.maxSize) { // Fixed condition
            console.log("Stack is full");
            return;
        }
        this.items[++this.top] = element; // Correctly increment top
        console.log(element + " pushed into stack");
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return null;
        }
        let poppedElement = this.items[this.top];
        this.items[this.top--] = undefined; // Remove element and decrement top
        return poppedElement;
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return null;
        }
        return this.items[this.top]; // Use this.top instead of items.length - 1
    }

    isEmpty() {
        return this.top === -1;
    }

    printStack() {
        return this.items.filter(item => item !== undefined).toString(); // Ensure no undefined elements
    }
}

export default Stack;
