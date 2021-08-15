// Given 2 arrays. create a function that let's a user know (true/false) whether these two arrays contain any common items
// For example:
// const array1 = ['a','b','c','x'];
// const array2 = ['z','y','i'];
// Above should return false
// -----
const array1 = ['a','b','c','x'];
const array2 = ['z','y','v'];
// Above should return true

// 2 parameters - arrays - no size limit
// return true or false

// O(n^2) for nested loop method for { for { } }
// We would explain this is inefficient code
// function containsCommonItem(arr1, arr2) {
//     for( let i = 0; i < arr1.length; i++) {
//         for( let j=0; j < arr2.length; j++) {
//             if(arr1[i] === arr2[j]) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }
// console.log(containsCommonItem(array1,array2))
// This is O(a*b)

// array1 ==> obj{
// a: true,
// b: true,
// c: true,
// x: true,
// }
// array2[index] === obj.properties

function containsCommonItem2(arr1, arr2) {
    // loop through first array and create object where properties === items in the array
    // Can we assume always 2 params?
    let map = {};
    for (let i = 0; i < arr1.length; i++) {
        if(!map[array1[i]]) {
            const item = array1[i];
            map[item] = true;
        }
    }
    // console.log(map)
    // loop through second array and check if item in second array exists on created object
    for (let j = 0; j < arr2.length; j++) {
        if (map[array2[j]]) {
            return true;
        }
    }
    return false;
}

// O(a+b) Time Complexity
// O(a) Space Complexity

// console.log(containsCommonItem2(array1, array2))

function containsCommonItem3(arr1, arr2) {
    return arr1.some(item => arr2.includes(item))
}
// console.log(containsCommonItem3)