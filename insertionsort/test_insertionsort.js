import * as sort from './insertionsort.js';

let arr = [5, 2, 4, 6, 1, 3];

console.log("Shift: List before sorting: " + arr);
console.log("Shift: List after sorting: " + sort.insertionSortShift(arr));

arr = [5, 2, 4, 6, 1, 3];

console.log("Swap: List before sorting: " + arr);
console.log("Swap: List after sorting: " + sort.insertionSortSwap(arr));