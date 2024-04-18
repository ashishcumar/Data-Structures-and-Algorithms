// RUN SCRIPT :- node Minimum-In-Rotated-Sorted-Arr2.js

/*
this question is also same as minimum in sorted rotated array but it has duplicates as well
*/

// [3,3,1,1]
const minInArr = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  let min = nums[0];

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
 /*
 This check is to tackle the duplicate elements in array
  */
    if (
      nums[left] === nums[mid] &&
      nums[mid] === nums[right] &&
      left !== right
    ) {
      min = Math.min(min, nums[left]);
      left++;
      right--;
      continue;
    }

    if (nums[left] < nums[mid]) {
      min = Math.min(min, nums[left]);
      left = mid + 1;
    } else {
      if (nums[mid] < nums[right]) {
        min = Math.min(min, nums[mid]);
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return min
};


console.log(minInArr([10,1,10,10]));