"use strict"

let n = +prompt('N ni kiriting', '')

let array = [];

for (let  i = 1; i <= n; i++)
    {
        if (i % 2 === 0)
            {
                array.push(i)
            }
    }
    alert(array)