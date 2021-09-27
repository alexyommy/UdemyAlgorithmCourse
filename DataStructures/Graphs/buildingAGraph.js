// Example
//    2 - 0
//  /   \
// 1  -  3

// Different Ways to represent a graph

// Edge List
const graph = [[0,2], [2,3], [2,1], [1,3]];
// This shows all the connections of a graph

// Adjancent List
const graph = [[2], [2,3], [0,1,3], [1,2]]

// Adjacent Matrix
const graph = [
    0: [0,0,1,0],
    1: [0,0,1,1],
    2: [1,1,0,1],
    3: [0,1,1,0]
]