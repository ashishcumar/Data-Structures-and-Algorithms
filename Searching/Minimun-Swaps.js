// RUN SCRIPT :- node Minimun-Swaps.js

const minSwaps = (nums) => {
  let tempNums = [...nums].sort((a, b) => a - b);
  let hash = {};

  for (let i = 0; i < tempNums.length; i++) {
    hash[tempNums[i]] = i;
  }
  let left = 0;
  let swaps = 0;

  while (left < nums.length) {
    if (nums[left] === tempNums[left]) swaps++;
    else {
      let index = hash[nums[left]];
      let temp = nums[index];
      nums[index] = nums[left];
      nums[left] = temp;
      hash[nums[left]] = left;
      hash[tempNums[left]] = index;
      swaps++;
    }
  }

  return swaps
};
