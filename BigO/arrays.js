const strings = ['a','b','c','d'];
            //    0   1   2   3
// 4*4 = 16 bytes of storage

// access
console.log(strings[2]); //O(1)

// push
strings.push('e'); //O(1)

// pop
strings.pop();
strings.pop(); //O(1)

// unshift adds element to the front of the array
strings.unshift('x') // O(n) because we had to iterate through the array to move the indexes

// splice
strings.splice(2, 0, 'alien') //O(n/2) = O(n)

console.log(strings)