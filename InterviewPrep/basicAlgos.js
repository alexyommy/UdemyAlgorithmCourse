function fooBuzz(start, end) {
    // Declare empty array here and use .push(i) to add values
    for (var i = start; i <= end; i++) {
        if(i % 15 == 0){
            console.log("FizzBuzz!")
        }
        else if(i % 3 == 0) {
            console.log("Fizz");
        }
        else if(i % 5 == 0) {
            console.log("Buzz");
        }
        else {
            console.log(i);
        }
    }
}   
// fooBuzz(1,30)

function reverseString(str1, str2) {
    // Check input 
    if(!str1 || str1.length < 2 || typeof str1 !== 'string') {
        return 'Invalid input'
    }
    reverseString = str1.split('').reverse().join('');
    if (reverseString == str2) {
        return true;
    } else {
        return false;
    }
}
// console.log(reverseString('hello', 'olleh'))


class BinarySearchTree {
    constructor() {
        this.root = null;
    }
}

// Create a Node class for a Binary Seach Tree
class Node
{
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

let sum=0;

function leafSum(root){
    // Empty search tree
    if (root == null)
        return 0;
    
    // add root data to sum if root is a leaf node
    if (root.left == null && root.right == null)
        sum += root.value;
    
    // propagate recursively in left and right subtree
    leafSum(root.left);
    leafSum(root.right);
}

// construct binary tree
let root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right = new Node(3);
root.right.right = new Node(7);
root.right.left = new Node(6);
root.right.left.right = new Node(8);
// variable to store sum of leaf nodes
leafSum(root);
console.log(sum);
