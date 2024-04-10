// RUN SCRIPT node number-to-bit.js

// USING WHILE LOOP 
const toBinary = (n) => {
  let binaryNum = ''
  while(n >= 1){
    if(n % 2 === 1) binaryNum = 1 + binaryNum
    else binaryNum = 0 + binaryNum
    n = Math.floor(n/2)
  }

  return binaryNum
}

// USING RECURSION
function convertDecimalToBinary(decimalNumber) {
   if (decimalNumber === 0) {
    return "0";
  } else {
    return (
      convertDecimalToBinary(Math.floor(decimalNumber / 2)) +
      (decimalNumber % 2)
    );
  }
} 

// TIME AND SPACE COMPLEXITY IS O(logn) BECAUSE WE ARE DIVIDING THE NUMBER BY 2 IN EACH ITERATION
  

console.log(convertDecimalToBinary(13));
