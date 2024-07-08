"use strict"

function arr(n) {
    const fibonachchiArray = [1, 1];
    for (let i = 2; i < n; i++) {
      const nextFibonachchi = fibonachchiArray[i - 1] + fibonachchiArray[i - 2];
      fibonachchiArray.push(nextFibonachchi);
    }
    return fibonachchiArray;
  }
  
  const n = 10;
  const fibonachchiArray = arr(n);
  console.log(fibonachchiArray);