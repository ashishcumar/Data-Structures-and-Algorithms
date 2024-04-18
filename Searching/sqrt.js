// RUN SCRIPT :- node sqrt.js

// time complexity is O(sqrt(n))
const sqrt = (n) => {
  let i = 1;
  while (i * i <= n) {
    i++;
  }
  if (i * i !== n) return i - 1;
  return i;
};

// Other Approach by binary search

const sqrtbs = (n) => {
  let left = 1;
  let right = n;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    let tempPower = mid * mid;
    if (tempPower === n) return mid;
    else if (tempPower > n) right = mid - 1;
    else left = mid + 1;
  }

  return right;
};
