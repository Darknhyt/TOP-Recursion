import { fibs, fibsRec } from "./fibonacci.js"
import { mergeSort } from "./mergeSort.js";

/* 
Assignment 1
Input: 8
Expected: [0, 1, 1, 2, 3, 5, 8, 13]
*/
console.log('Assigment 1');
console.log(`Iterative fibonaci: ${fibs(8)}`); 
console.log(`Recursive fibonaci: ${fibsRec(8)}`); 

/*
Assignment 2
Merge Sort
1. Input: [3, 2, 1, 13, 8, 5, 0, 1]
Expected: [0, 1, 1, 2, 3, 5, 8, 13]
*/
console.log('Assigment 2');
console.log(`Merge Sort 1: ${mergeSort([3, 2, 1, 13, 8, 5, 0, 1])}`);

/*
2. Input:[105, 79, 100, 110
Expected: [79, 100, 105, 110]
*/
console.log(`Merge Sort 2: ${mergeSort([105, 79, 100, 110])}`);