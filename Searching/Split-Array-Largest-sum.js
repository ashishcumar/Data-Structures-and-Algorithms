// RUN SCRIPT :-node Split-Array-Largest-sum.js

// It has a time complexity of O(n*log(max(A)))
// where 0(n) is from isPossible function
// and 0(log(max(A))) is from binary search in splitArray function
const isPossible = (nums, mid) => {
  let n = 1;
  let count = 0;

  for (const element of nums) {
    if (count + element <= mid) {
      count += element;
    } else {
      n++;
      count = element;
    }
  }

  return n;
};
const splitArray = (A, k) => {
  if (k > A.length) return -1;
  let min = Math.max(...A);
  let max = A.reduce((a, b) => a + b);

  while (min <= max) {
    let mid = min + Math.floor((max - min) / 2);
    if (isPossible(A, mid) <= k) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  return min;
};


