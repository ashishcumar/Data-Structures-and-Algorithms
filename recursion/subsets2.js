// Run Script :-  node subsets2.js

/*
this question is also same as subsets question but in this we have duplicate number in the array
and for that i have change res type from arr to new Set() and storing array as a string so the set 
can easily contain only duplicate and will returning we just have to parse the value of nums again and 
sort the given array in ascending order
*/


const generateSubsets = (nums) => {
    nums = nums.sort((a,b) => a-b)
    const res = new Set()

    const getSubsets = (index,temp,length,res) => {
      if(index >= length){
        res.add(JSON.stringify([...temp]))
        return
      }

      temp.push(nums[index])
      getSubsets(index + 1,temp,length,res)
      temp.pop()
      getSubsets(index + 1,temp,length,res)
    }
    getSubsets(0,[],nums.length,res)
    return [...res].map(ele => JSON.parse(ele))
}

console.log(generateSubsets([1,2,3,2,3,]));

