class CircularQueue {
    constructor(maxSize = 10) {
        this.maxSize = maxSize;
        this.queue = new Array(maxSize); // Fixed-size array
        this.front = -1;
        this.rear = -1;
        console.log("Circular Queue created with size " + this.maxSize);
    }

    enqueue(element) {
        if (this.isFull()) {
            console.log("Queue is full");
            return;
        }
        if (this.isEmpty()) {
            this.front = 0; // First element condition
        }
        this.rear = (this.rear + 1) % this.maxSize;
        this.queue[this.rear] = element;
        console.log(element + " enqueued to queue");
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return null;
        }
        let removedElement = this.queue[this.front];
        this.queue[this.front] = undefined; // Clear the element

        if (this.front === this.rear) {
            // Queue is now empty
            this.front = this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.maxSize;
        }
        console.log(removedElement + " dequeued from queue");
        return removedElement;
    }

    display() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }
        let result = [];
        let i = this.front;
        while (true) {
            result.push(this.queue[i]);
            if (i === this.rear) break;
            i = (i + 1) % this.maxSize;
        }
        console.log("Queue contents:", result.join(", "));
    }

    getFront() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return null;
        }
        return this.queue[this.front];
    }

    getRear() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return null;
        }
        return this.queue[this.rear];
    }

    isEmpty() {
        return this.front === -1;
    }

    isFull() {
        return (this.rear + 1) % this.maxSize === this.front;
    }
}

export default CircularQueue;
