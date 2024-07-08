"use strict"

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let result = [];

for (let i = 0; i < Math.ceil(arr.length / 2); i++) 
    {
  result.push(arr[i]);

  result.push(arr[arr.length - 1 - i]);
}

console.log(result);