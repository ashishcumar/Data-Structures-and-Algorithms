// RUN SCRIPT :- node Swap-Number.js

// using xor ^ operator (it basically returns 0 when both the digits are same else it will return 1)

const swapNumber = (a, b) => {
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  return { a, b };
};

// SWAP WITHOUT USING XOR

const swapNumber1 = (a, b) => {
  b = b + a;
  a = b - a;
  b = b - a;
  return { a, b };
};

// USING ARR DESTRUCTION
const swapNumber2 = (a,b) => {
  [a,b] = [b,a]
  return {a,b}
}

// USING TEMP VARIABLE

const swapNumber3 = (a, b) => {
  let temp = b;
  b = a;
  a = temp;
  return { a, b };
};
 
console.log(swapNumber3(10, 20));
