class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek(){
        return this.first
    }
    enqueue(value){
    // equivalent to push 
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++
        return this;
    }
    dequeue(){
    // equivalent to pop but removes from top/end of the list
        if(!this.first) {
            return null;
        } 
        if (this.first === this.last) {
            this.last = null;
        }
        const holdingPointer = this.first;
        this.first = this.first.next;
        this.length--;
        return this; 
    }
}

const myQueue = new Queue();
myQueue.enqueue('Joy');
myQueue.enqueue('Erin');
myQueue.enqueue('David');
console.log(myQueue.enqueue('Alex'));
console.log(myQueue.peek());
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue.dequeue());

// Joy
// Matt
// Pavel
// Samit 