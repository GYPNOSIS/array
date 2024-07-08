"use strict"

function arifmetikProgressiyaniTuzish(n, A, D) {
    let arifmetikProgressiya = [];
  
    for (let i = 0; i < n; i++) {
      arifmetikProgressiya.push(A);
      A += D;
    }
  
    return arifmetikProgressiya;
  }
  
  let n = 5;
  let A = 2;
  let D = 3;
  
  let arifmetikProgressiya = arifmetikProgressiyaniTuzish(n, A, D);
  console.log(arifmetikProgressiya);