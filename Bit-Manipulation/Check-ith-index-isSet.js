// RUN SCRIPT :-  node Check-ith-index-isSet.js

// BRUTE FORCE APPROACH IS TO CHANGE NUMBER INTO BIT AND THEN TRAVERS IT
const checkIthBit = (n, i) => {
  let bitNum = "";

  while (n >= 1) {
    bitNum = (n % 2) + bitNum;
    n = Math.floor(n / 2);
  }
  console.log({bitNum})
  if (bitNum[bitNum.length - 1 - i] === "1") {
    return true;
  }
  return false;
};

// OPTIMIZED APPROACH USING LEFT SHIFT
const checkIthBit1 = (n, i) => {
   if((n & (1<< i)) !== 0) return true
   return false
}

// OPTIMIZED APPROACH USING RIGHT SHIFT

const checkIthBit2 = (n, i) => {
    if(((n >> i) & i) === 1) return true
    return false
}

console.log(checkIthBit2(13,1));