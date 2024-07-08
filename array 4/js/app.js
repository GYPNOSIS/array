"use strict"

function arr(n, A, D) {
    const progression = [];
    for (let i = 0; i < n; i++) {
      const term = A + i * D;
      progression.push(term);
    }
    return progression;
  }
  
  const n = 5;
  const A = 2;
  const D = 3; 
  
  const progressionArray = arr(n, A, D);
  console.log(progressionArray);