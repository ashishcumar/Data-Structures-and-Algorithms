// RUN SCRIPT :- node Search-Insert-Position.js

// TIME COMPLEXITY IS 0(logN)
// In this question we just have to index where the n[i] >= k and it should be closest to k.
const searchInsertPosition = (nums, k) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === k) return mid;
    else if (nums[mid] < k) left = mid + 1;
    else right = mid - 1;
  }

  return left; // left is the index where the k possibly should be
};

console.log(searchInsertPosition([1, 2, 3, 4, 5, 6, 7, 8, 9], 6));
console.log(searchInsertPosition([1, 2, 3, 4, 5, 6, 7, 8, 9], 13));