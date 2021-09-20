class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.botttom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value){
        const newNode = new Node(value);
        if (this.length === 0){
            this.top = newNode;
            this.botttom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;  
    }

    pop(){
        if(!this.top){
            return null;
        }
        if (this.top === this.bootom) {
            // or this.length === 0
            this.bottom = null;
        }
        const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return holdingPointer;
    }
}

const myStack = new Stack();
console.log(myStack.peek());
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.peek();
myStack.pop();
myStack.pop();
console.log(myStack)
// Discord
// Udemy
// Google