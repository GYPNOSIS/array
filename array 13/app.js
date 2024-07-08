"use strict"

let n = 7;

let arr = [1, 2, 3, 4, 5, 6, 7];

let result = [];

for (let i = n - 1; i >= 0; i -= 2) 
    {
  result.push(arr[i]);
}

console.log(result);