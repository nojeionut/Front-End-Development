import Queue from './queue.js';

let queue = new Queue(5);
queue.enqueue(10);
queue.enqueue(20);
queue.display();
queue.dequeue();
queue.display();