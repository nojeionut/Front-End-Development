import LinkedList from './linkedlist.js';

const list = new LinkedList();

list.add(10);
list.add(20);
list.add(30);


list.insertAt(40, 2);
list.insertAt(50, 1);
list.insertAt(60, 0);

list.removeElement(20);

list.display();

