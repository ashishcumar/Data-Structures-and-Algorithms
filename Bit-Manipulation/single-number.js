// RUN SCRIPT :- node single-number.js


// BRUTE FORCE USING HASH

const singleNumber = (arr) => {
  let hash = {}
  for(let i = 0; i < arr.length; i++){
    hash[arr[i]] ? hash[arr[i]]++ : hash[arr[i]] = 1
  }

  Object.entries(hash).map(([key,value]) => {
    if(value === 1) console.log({key})
  })
}

// OPTIMAL APPROACH USING XOR ^ OPERATOR 
// When we use xor operator is change all array numbers in bit and then cancel out the same number occuring even times and only odd or 1 occurance number left

const singleNumber1 = (arr) => {
 let xorVal = 0
 for(let i = 0; i < arr.length; i++){
     xorVal = xorVal ^ arr[i]
 }

 return xorVal;
}

// TIME COMPLEXITY IS O(n) 

console.log(singleNumber1([2,2,3,3,5]));
