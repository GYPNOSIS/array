"use strict"

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let K = 2;

let L = 5;

let sum = 0;

for (let i = K; i <= L; i++) 
    {
  sum += arr[i];
}

console.log(sum);