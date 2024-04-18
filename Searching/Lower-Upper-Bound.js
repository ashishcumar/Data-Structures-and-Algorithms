// RUN SCRIPT :- node Lower-Upper-Bound.js

const lowerBound = (arr, k) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] >= k) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

const upperBound = (arr, k) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] > k) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return right;
};
