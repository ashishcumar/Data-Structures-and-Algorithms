// Run Script :- node subsequence-satisfy-given-sum.js

/* 
Brute force approach so it broke downs when the arr has so many elements
*/ 


const checkForPossibleSubsequences = (nums,target) => {
  let count = 0

  const pairs = (index,temp,length) => {
    
    if(index >= length){
        let min = Math.min(...temp)
        let max = Math.max(...temp)
        if((min + max) <= target){
            count++
            return
        }
        return
    }

    temp.push(nums[index])
    pairs(index + 1,temp,length)
    temp.pop()
    pairs(index + 1,temp,length)
  }

  return count;
}