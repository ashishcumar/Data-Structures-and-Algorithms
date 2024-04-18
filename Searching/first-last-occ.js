// RUN SCRIPT :- node first-last-occ.js

// OPTIMAL APPROACH BY USING BINARY SEARCH
/*
 to find first and last occurance we will implement lower and upper bound function
 */
// TIME COMPLEXITY :- O(log n)
const getLowerUpperBound = (arr, k, isLower) => {
  let left = 0;
  let right = arr.length - 1;
  let ans = arr.length;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if ((isLower && arr[mid] >= k) || (!isLower && arr[mid] > k)) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return ans;
};
const firstOcc = (arr, k) => {
  let lb = getLowerUpperBound(arr, k, true);
  if (lb === arr.length || arr[lb] !== k) return [-1, -1];
  let ub = getLowerUpperBound(arr, k, false) - 1;
  return [lb,ub ,ub-lb+1];
};

console.log(firstOcc([1, 2, 3, 3, 3, 3, 4,4,4,5,5], 4))

/*
 their are more possible approaches aviable
 like using linear seach and storing first occ and last occ in two different variables
 , and using two pointer approach but the most optimal is using binary search
 
 */