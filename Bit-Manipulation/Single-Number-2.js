// RUN SCRIPT :- node Single-Number-2.js


// In this approach first we are sorting the array and then we will start it from index 1 and increment  it to 3 in each step 
// and then we check whether the current element is equla to the previous element or not if it is not then return n-1 element
// else return the last number of array

// TIME complexity for this approach O(n log n) due to sorting the array 
// Its is better approach than bitwise operators because that uses n*32 time complexity  while this method uses O(nlog n) which slowly increase the time complexity according to the n size 
const singleNumber2 = (nums) => {
  let numSorted = nums.sort((a, b) => a - b); 
  let numLen = nums.length;

  for (let i = 1; i < numLen; i += 3) {
    if (numSorted[i] !== numSorted[i - 1]) return numSorted[i - 1];
  }

  return numSorted[numLen - 1];
};
