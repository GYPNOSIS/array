"use strict"

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let oddIndexes = [];
let evenIndexes = [];

for (let i = 1; i < arr.length; i += 2) {
  oddIndexes.push(arr[i]);
}

for (let i = arr.length - 2; i >= 0; i -= 2) {
  evenIndexes.push(arr[i]);
}

let result = oddIndexes.concat(evenIndexes);
console.log(result);