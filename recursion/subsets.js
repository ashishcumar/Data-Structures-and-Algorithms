// Run Script :- node subsets.js

// time complexity is O(2^n) because for each element 
// case we are taking two cases one with taking it and other without taking it.
const generateSubsets = (nums) => {
  const res = []

  const getSubsets = (index,temp,length,res) => {
    if(index >= length){
        res.push([...temp])
        return
    }

    temp.push(nums[index])
    getSubsets(index+1,temp,length,res)
    temp.pop()
    getSubsets(index+1,temp,length,res)
  }

  getSubsets(0,[],nums.length,res)

  return res 
}

console.log(generateSubsets([1,2,3]));