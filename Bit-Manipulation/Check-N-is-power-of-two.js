// RUN SCRIPT :-  node Check-N-is-power-of-two.js

const isPowerOfTwo = (n) => {
   if(n<= 0) return false;
   if((n & (n-1)) === 0){
   console.log(n & (n - 1));
       return true;
   }
   return false
};

console.log(isPowerOfTwo(8))
