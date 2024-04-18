// RUN SCRIPT :-  node smallest-divisor-with-given-threshold.js

// Given an array nums and an integer threshold, we will choose a positive integer divisor
// and divide all the array by it and sum the result of the division and then compare it whether
// it is smaller or equal to my given threshold value

// Most Optimal Approach is by Binary Search with time complexity of O(n*log(max(nums)))

const checkDivisorSum = (nums, divisor, k) => {
  let sum = 0;
  for (const element of nums) {
    sum += Math.ceil(element / divisor);
  }
  return sum <= k;
};

const smallestDivisor = (nums, threshold) => {
  let minDivisor = Math.min(...nums);
  let maxDivisor = Math.max(...nums);
  let ans = Number.MAX_SAFE_INTEGER;

  while (minDivisor <= maxDivisor) {
    let mid = minDivisor + Math.floor((maxDivisor - minDivisor) / 2);
    if (checkDivisorSum(nums, mid, threshold)) {
      ans = Math.min(ans, mid);
      maxDivisor = mid - 1;
    } else {
      minDivisor = mid + 1;
    }
  }
  return ans;
};
