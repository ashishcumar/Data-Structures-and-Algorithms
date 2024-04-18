// RUN SCRIPT :- node BS-in-rotated-arr-2.js

/*
this rotated search questions one side is always sorted 
first step is to find that side and apply basic bs logic to that part
and then apply opposite operations of the remaining part
 */

const bsInRotatedArr = (nums,k) => {
  let left = 0
  let right = nums.length - 1

  while(left <= right){
    let mid = left + Math.floor((right-left)/2)

    if(nums[mid] === k) return true
    if(nums[left] === nums[mid] && nums[mid] === nums[right]){
        left++   
        right-- 
        continue
/*
it is a additional case to check if the left and right elements are same
if they are same then we can increment the left pointer and decrement the right pointer
else all code is same as binary search in rotated array part 1
 */
    }

    if(nums[left] <= nums[mid]){
        if(nums[left] <= k && k <= nums[mid]) right = mid - 1;
        else left = mid + 1;
    }else{
        if(nums[mid] >= k && k >= nums[high]) left = mid + 1;
        else right = mid - 1;
    }
  }


  return false
}

console.log(bsInRotatedArr([4,5,6,7,0,1,2], 9))
console.log(
  bsInRotatedArr(
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 13, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    13
  )
);