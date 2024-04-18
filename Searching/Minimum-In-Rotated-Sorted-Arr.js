// RUN SCRIPT :-  node Minimum-In-Rotated-Sorted-Arr.js

const minInArr = (nums) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[left] < nums[mid]) {
      /**
  In this step i am checking whether the left side is sorted or not and if it sorted 
  i am storing the minimum value in min and moving my left pointer to mid + 1
 */
      left = mid + 1;
    } else {
      if (nums[mid] < nums[right]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return nums[left];
};

console.log(minInArr([3, 4, 5, 1, 2]));
console.log(minInArr([3, 4, 5, 6, 7, 0, 1, 2]));
