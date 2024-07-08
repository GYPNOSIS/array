"use strict"

let arr = [1, 2, 3, 4, 5, 6, 7];

let indexes = [];

let events = [];

for (let i = 0; i < arr.length; i++) 
    {
  (i % 2 === 0 ? indexes : events).push(arr[i]);
}

let result = indexes.concat(events);
console.log(result);