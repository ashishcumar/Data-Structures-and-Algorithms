// RUN SCRIPT :- node toggle-ith-bit.js
// OPTIMAL APPROACH IS USING |(OR) OPERATOR WITH ~(NOT) OPERATOR AND SAME USING 1 << (LEFT SHFIT) to I INDEX

const toggleIthBit = (n,i) => {
    return (n^(1 << i));
}

console.log(toggleIthBit(13,1))

