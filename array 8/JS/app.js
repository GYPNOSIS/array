"use strict"


let n = +prompt('N ni kiriting', '');
let array = [];
let tartib = 0;

for (let i = 1; i <= n; i++) {
    if (i % 2 === 0){
        
    }
    else{
      array.push(i)
      tartib++
    }
}
alert(`${array} toqlar soni = ${tartib}`)