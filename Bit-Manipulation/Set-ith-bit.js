//Run Script :- node Set-ith-bit.js

// OPTIMAL APPROACH USING OR AND LEFT SHIFT OPERATOR
const setBit = (n, i) => {
  // if 1 in binary is 1 and when we left shit it to ith index (2) it will be 100 and using or operator with n which will converted in binary first and then or operator works on it.
  return n | (1 << i);
};

// BRUTE FORCE IS TO CONVERT N INTO BINARY THEN UPDATE ITS STATE AND THE CHANGE IT TO DECIMAL NUMBER AGAIN
const setBitBF = (n, i) => {
  let bitVal = "";
  while (n >= 1) {
    bitVal = (n % i) + bitVal;
    n = Math.floor(n / 2);
  }

  console.log({ bitVal });
  let splitBitVal = bitVal.split("");
  splitBitVal[i] = 1;
  let updatedBitVal = Number(splitBitVal.join(""));
  console.log({ updatedBitVal });
  let decVal = 0;
  let p = 1;
  while (updatedBitVal) {
    let lastDigit = updatedBitVal % 10;
    updatedBitVal = Math.floor(updatedBitVal / 10);
    decVal += lastDigit * p;
    p = p * 2;
  }

  return decVal;
};
console.log(setBitBF(13, 2));
