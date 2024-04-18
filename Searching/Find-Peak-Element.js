// RUN SCRIPT :- node Find-Peak-Element.js


const findPeakElement = (nums) => {
    if(nums.length === 1 || nums[0] > nums[1]) return 0
    if(nums[nums.length -1] > nums[nums.length -2]) return nums.length - 1
    let left = 1
    let right = nums.length - 2
    
    while(left <= right){
        let mid = left + Math.floor((right - left) / 2)
        if(nums[mid] > nums[mid-1] && nums[mid] > nums[mid + 1]) return mid
        else if (nums[mid] > nums[mid - 1]) left = mid + 1
        else right = mid - 1
    }

    return -1
}

console.log(findPeakElement([1,2,1,3,5,6,4]));
console.log(findPeakElement([1,2,3,1]));

