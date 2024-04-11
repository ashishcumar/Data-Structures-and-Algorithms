// RUN SCRIPT :- node set-last-bit.js

// OPTIMAL APPROACH BY USING & OPERATOR
const setLastBit = (n) => {
    return (n & n-1)
}

console.log(setLastBit(12));