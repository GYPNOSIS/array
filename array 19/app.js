"use strict"

let arr = [5, 2, 8, 3, 1, 7, 4];

let lastIndex = arr.length - 1;

let maxIndex = 0;

for (let i = 1; i < lastIndex; i++) 
    {
  if (arr[i] > arr[maxIndex] && arr[i] < arr[lastIndex]) 
    {
    maxIndex = i;
  }
}

console.log(maxIndex);