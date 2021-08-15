// O(n) --> Linear Time
// n is an arbitrary variable, it just means the Big O depends on the number of inputs (fish)
const nemo = ['nemo'];
// const large = new Array(100).fill('nemo')
function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === 'nemo') {
            console.log('Found NEMO!');
        }
    }
}
// findNemo(nemo); 

// O(1) - Constant Time
// No matter how many or the size of boxes, we're just grabbing the first box
function compressFirstBox(boxes) {
    console.log(boxes[0]);
}

// const boxes = [0,1,2,3,4,5];

function logFirstTwoBoxes(boxes) {
    console.log(boxes[0]);
    console.log(boxes[1]);
}
// logFirstTwoBoxes(boxes);

function funChallenge(input) {
    let a = 10; //O(1)
    a = 50 + 3; //O(1)

    for (let i = 0; i < input.length; i++) { //O(n)
    anotherFunction(); //O(n)
    let stranger = true; //O(n)
    a++; //O(n)
    }
    return a; //O(1)
}

// 3 + n + n + n + n
// BIG O (3 + 4n) = O(n)

function anotherFunChallenge(input) {
    let a = 5; //O(1)
    let b = 10; //O(1)
    let c = 50; //O(1)
    for (let i = 0; i < input; i++) { 
    let x = i + 1; //O(n)
    let y = i + 2; //O(n)
    let z = i + 3; //O(n)

    }
    for (let j = 0; j < input; j++) { 
      let p = j * 2; //O(n)
      let q = j * 2; //O(n)
    }
    let whoAmI = "I don't know"; //O(1)
}

// 1+1+1+1+n+n+n+n+n
// BIG O (4 + 5n) = O(n)

// Log all pairs of array
const boxes = ['a','b','c','d','e'];

function logAllPairsOfArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i], array[j])
        }
    }
}
// logAllPairsOfArray(boxes)

// O(n * n) = O(n^2) -> Quadratic Time

function boo(n) {
    for (let i = 0; i < n.length; i++) {
        console.log("booOOooO!"); //O(1)
    }
}
// boo([1,2,2]) //O(1)

// Twitter Example
// Find 1st, Find Nth...
const array = [
    {tweet: 'hi',
    date: 2012 }, 
    {tweet: 'great day today',
    date: 2014 }, 
    {tweet: 'new day',
    date: 2018 }];
// Since we're comparing each item in array with another this is O(n^2);
array[0]; //O(1)
array[array.length-1]; //O(1)

'afshdjfhasdjkfadsjkjh'.length //The Big O notation for this depends on what language you're using .length with. For JS, .length is built in to each string O(1)