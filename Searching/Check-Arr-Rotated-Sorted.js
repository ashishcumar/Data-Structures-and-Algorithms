// RUN SCRIPT :-  node Check-Arr-Rotated-Sorted.js


// TIME COMPLEXITY is 0(n)
const checkIsSortedAndRotated = (nums) => {
 let check = 0
 for(let i =0;i<nums.length;i++){
    if(nums[i] > nums[(i+1)%nums.length]) check++
    // false condition is thrown when check is greater than 1 because the above get false when array top and low element meets 
    if(check > 1) return false
 }
 return true
}