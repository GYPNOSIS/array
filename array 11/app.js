"use strict"

const arr = [];
const K = [];

const result = [];

let index = K;

while (index < arr.length) 
    {
  result.push(arr[index]);
  index += K;
}

console.log(result.join(' '));