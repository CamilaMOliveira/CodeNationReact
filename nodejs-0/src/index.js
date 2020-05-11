'use strict'

let array;

const calcFibonacci = (pos) => {

    let res = 0;

    if(pos == 0) {
        return 0;
    }

    if(pos == 1) {
        return 1;
    }

    res = calcFibonacci(pos-1) + calcFibonacci(pos-2);

    return res;
}

const fibonacci = () => {
    let fibSize = 100; /* Initial array size */
    let fibResult = 0;
    let i = 0;
    let arrayAux = new Array(fibSize);

    /* Calculate the first fibonacci values until 350 */
    while (fibResult <= 350) {
        fibResult = calcFibonacci(i);
        arrayAux[i] = fibResult;
        i++;
    }

    /* Actual array size */
    fibSize = i;

    /* Create new array containing only the fibonacci returned values */
    array = new Array(fibSize);

    console.log(`fib(${fibSize}) = `);

    for(let i = 0; i < fibSize; i++) {
        array[i] = arrayAux[i];
        console.log(`${array[i]}`);
    }

    return array;
}

const isFibonnaci = (num) => {
    console.log("Function isFibonnaci");

    if (array === undefined || array.length == 0) {
        console.log("Array Undefined or Empty");
    } else {
        for(let i = 0; i < array.length; i++) {
            if(array[i] == num) {
                return true;
            }
        }
    }

    return false;
}

module.exports = {
    fibonacci,
    isFibonnaci
}

fibonacci();
let isFib = isFibonnaci(30);

console.log(`isFib = ${isFib}`);