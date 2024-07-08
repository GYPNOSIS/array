"use strict"

const n = 5; 
const A = 1; 
const B = 2; 

const arr = [A, B];

for (let i = 2; i < n; i++) {
  const sum = arr[i - 1] + arr[i - 2];
  arr.push(sum);
}

console.log(arr);