"use strict"

function arr(n) {
    let arr = [];
    let num = 1;
  
    for (let i = 0; i < n; i++) {
      arr.push(num);
      num += 2;
    }
  
    return arr;
  }
  
  let n = 5;
  let Numbers = arr(n);
  console.log(Numbers);