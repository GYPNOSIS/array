"use strict"

let arr = [5, 2, 8, 3, 1, 7, 4];
let lastElement = arr[arr.length - 1];
let smallestElement = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < lastElement) {
    smallestElement = arr[i];
    break;
  }
}

console.log(smallestElement);