// RUN SCRIPT :- node singleNonDuplicate.js

/*
the approach to solve this problem is to just look for the index

eg:-       [1,1,2,2,3,3,4,5,5,6,6]
indexes :-  0,1,2,3,4,5,6,7,8,9,10   
 
first check the mid index and see if mid%2 is == 0 or not 
if it is not equal to zero than check check mid and mid-1 
index is same or not if its same update the left to mid + 1
and again check for index then module it 
*/

const findSingleElement = (nums) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (mid % 2 !== 0) {
      if (nums[mid] === nums[mid - 1]) left = mid + 1;
      else right = mid - 1;
    } else {
      if (nums[mid] === nums[mid + 1]) left = mid + 1  
      else right = mid - 1;
    }
  }

  return nums[left];
};

console.log(findSingleElement([1, 1, 2, 3, 3, 4, 4, 8, 8]));
console.log(findSingleElement([3, 3, 7, 7, 10, 11, 11]));