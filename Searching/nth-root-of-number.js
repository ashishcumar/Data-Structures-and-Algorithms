// RUN SCRIPT :- node nth-root-of-number.js

/*
this is exponential method to calculate power

   */
const getPower = (x, n,targetVal) => {
  if(n === 1) return x
  let val = 1;

  while (n > 0) {
    if(val > targetVal) return 1 // this part to avoid bigger calculations as it here directly check whether the val is greater than targetVal or not
    if (n % 2 !== 0) {
      val = val * x;
      n--;
    } else {
      x = x * x;
      n = n / 2;
    }
  }
  return val;
};

const nthR = (x, n) => {
  if (n === 1) return x;
  let left = 1;
  let right = x;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    let pow = getPower(mid, n);
    if (pow === x) return mid;
    if (pow > x) right = mid - 1;
    else left = mid + 1;
  }
};


// TIME COMPLEXITY OF THIS IS O(logn)*O(logn)
// 1st 0(logn) comes from getPower function and the other from nthR function
console.log(nthR(8, 3));
