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
// leafSum(root);
// console.log(sum);

// Given a number and an array, return true if two numbers add up to the given number
function hasSumOfK(arr, goal) {
    // Create an Emty Objects
    let numObject = {};

    // Iterate through array with for-loop
    for (let eachNum in arr){
        let otherNum = goal - arr[eachNum];
        if(otherNum in numObject){
            let resultArr = [];
            resultArr.push(otherNum, arr[eachNum])
            return resultArr;
            // return true;
        }
        numObject[arr[eachNum]] = eachNum;
    }
    return false;
}
var arr = [1,3,10,11,14]
var goal = 13
console.log(hasSumOfK(arr, goal));

// Q2 - Given a node with a numerical value (from a binary tree), return the total sum of each node