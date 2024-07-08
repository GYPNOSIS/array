"use strict"

function ArrayElements(arr) 
{
    let result = [];

    let n = arr.length;
    
    for (let i = 0; i < n/2; i++) 
        {
      result.push(arr[i]);
      result.push(arr[n-1-i]);
    }
    
    if (n % 2 !== 0) {
      result.push(arr[Math.floor(n/2)]);
    }
    
    console.log(result.join(", "));
  }
  
  let inputArr = [4, 5, 7, 8, 69];
  ArrayElements(inputArr);