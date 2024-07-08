"use strict"

const arr = [4, 5, 7, 8, 69];

const box = [];

const box1 = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    box.push(arr[i]);
  } else {
    box1.push(arr[i]);
  }
}

box.sort((a, b) => a - b);

box1.sort((a, b) => b - a);

console.log(box.join(' '));

console.log(box1.join(' '));