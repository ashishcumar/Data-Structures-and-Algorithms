// RUN SCRIPT :-  node Clear-ith-bit.js

// BRUTE FORCE WAY IS TO CONVERT N INTO BINARY THEN CHANGE iTH INDEX TO 0 AND THEN CONVERT IT TO DECIMAL AGAIN

const clearIthBit = (n, i) => {
  let bitNum = "";
  while (n >= 1) {
    bitNum = (n % 2) + bitNum;
    n = Math.floor(n / 2);
  }
  let splitBit = bitNum.split("");
  splitBit[i] = 0;
  let updatedBitVal = Number(splitBit.join(""));
  let updatedDecVal = 0;
  let p = 1;
  while (updatedBitVal) {
    let lastDigit = updatedBitVal % 10;
    updatedBitVal = Math.floor(updatedBitVal / 10);
    updatedDecVal += lastDigit * p;
    p = p * 2;
  }

  return updatedDecVal;
};

// OPTIMAL SOLUTION IS USING & AND ~(NOT) OPERATOR

const clearIthBit1 = (n,i) => {
    return (n & ~ (1<<i))
}

console.log(clearIthBit1(13,2));
