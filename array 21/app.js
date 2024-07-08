"use strict"

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let K = 2;

let L = 5;

let sum = 0;

let count = 0;

for (let i = K; i <= L; i++) 
    {
  sum += arr[i];
  count++;
}

let average = sum / count;

console.log(average);