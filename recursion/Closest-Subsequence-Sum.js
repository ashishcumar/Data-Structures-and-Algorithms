// Run Script :- node Closest-Subsequence-Sum.js

/*
this question is also following the same approach as in subsets questions 
*/

// BRUTE FORCE WITH TC :- O(2^n)

const getMinDiff = (nums, goal) => {
  let minDiff = Number.MAX_SAFE_INTEGER;

  const checkMinDiff = (index, temp, length) => {
    if (index >= length) {
      let arrSum = temp.reduce((a, b) => a + b, 0);
      let currDiff = Math.abs(minDiff, Math.abs(arrSum - goal));
      if (currDiff < minDiff) {
        minDiff = currDiff;
        return;
      }
      return;
    }

    temp.push(nums[index]);
    checkMinDiff(index + 1, temp, length);
    temp.pop();
    checkMinDiff(index + 1, temp, length);
  };
  return minDiff;
};
