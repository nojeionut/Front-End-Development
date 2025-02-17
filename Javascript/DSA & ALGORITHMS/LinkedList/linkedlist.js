import Node from './node.js';

class LinkedList
{
    constructor()
    {
        this.head = null;
        this.size = 0;
    }

    add(element)
    {
        let node = new Node(element);
        let current;
        if(this.head == null)
        {
            this.head = node;
        }
        else
        {
            current = this.head;
            while(current.next)
            {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;

        console.log(`${element} added to the list`);
    }

    insertAt(element, index)
    {
        if(index > 0 && index > this.size)
        {
            return false;
        }
        else
        {
            let node = new Node(element);
            let curr, prev;
            curr = this.head;
            if(index == 0)
            {
                node.next = this.head;
                this.head = node;
            }
            else
            {
                curr = this.head;
                let it = 0;
                while(it < index)
                {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }

        console.log(`${element} inserted at ${index}`);
    }

    removeFrom(index)
    {
        if(index > 0 && index > this.size)
        {
            return -1;
        }
        else
        {
            let curr, prev, it = 0;
            curr = this.head;
            prev = curr;
            if(index == 0)
            {
                this.head = curr.next;
            }
            else
            {
                while(it < index)
                {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                prev.next = curr.next;
            }
            this.size--;

            console.log(`Element at ${index} removed`);
            return curr.element;
        }

    }

    removeElement(element)
    {
        let curr = this.head;
        let prev = null;
        while(curr != null)
        {
            if(curr.element === element)
            {
                if(prev == null)
                {
                    this.head = curr.next;
                }
                else
                {
                    prev.next = curr.next;
                }
                this.size--;
                console.log(`${element} removed`);
                return curr.element;
            }
            prev = curr;
            curr = curr.next;
        }
        console.log(`${element} not found`);
        return -1;

    }

    display()
    {
        let curr = this.head;
        let str = "";
        while(curr)
        {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }

    size_of_list()
    {
        console.log(this.size);
    }

    isEmpty()
    {
        return this.size == 0;
    }


}

export default LinkedList;