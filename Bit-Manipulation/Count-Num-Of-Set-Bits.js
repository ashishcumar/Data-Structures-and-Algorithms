// RUN SCRIPT :- node Count-Num-Of-Set-Bits.js

// In this question we just have to count the number of 1s in the binary representation of the number
// This is the brute force approach in which first we convert number into binary and then adding all onces to get the total bits
const numberOfSetBits = (n) => {
  let count = 0;
  while (n) {
    if (n % 2 === 1) {
      count++;
    }
    n = Math.floor(n / 2);
  }
  return count;
};

// OPTIMAL APPROACH IS TO USE & OPERATOR AND RIGHT SHIFT OPERATORS

const numberOfSetBits1 = (n) => {
  let count = 0;
  while (n) {
    if (n & 1) count++;
    n = n >> 1;
  }
};

// OTHER OPTIMAL APPROACH
const numberOfSetBits2 = (n) => {
  let count = 0;
  while (n) {
    n = n & (n - 1); // this is same as n = n & (n - 1) 
    count++;
  }
  return count;
};

/*
 in above approach we use & operator to get the last set bit and right shift the number by 1 bit to get the next set bit
 in numberOfSetBits1 we are using & and >> to get same response as numberOfSetBits2
 */

console.log(numberOfSetBits2(13));
