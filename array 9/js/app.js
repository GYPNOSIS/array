"use strict"

const arr = [4, 5, 7, 8, 69];
const num = arr.reverse();

let evenCount = 0;
for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 === 0) {
    console.log(num[i]);
    evenCount++;
  }
}

console.log(`juftlar soni = ${evenCount}`);