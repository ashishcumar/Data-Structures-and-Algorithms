// Run Script :- node combination-sum-1.js

const getCombinations = (index, arr, target, result, temp = []) => {
  if (index === arr.length) {
    if (target === 0) {
      result.push([...temp]);
    }
    return;
  }

  // if we take same index element
  if (arr[index] <= target) {
    temp.push(arr[index]);
    getCombinations(index, arr, target - arr[index], result, temp);
    temp.pop();
  }
  // if we don't take same index element
  getCombinations(index + 1, arr, target, result, temp);
};
const combinationSum = (nums, target) => {
  const result = [];
  getCombinations(0, nums, target, result, []);
  return result;
};

// console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([10, 1, 2, 7, 6, 1, 5],8));

// Time complexity for this case in O(2^target * n)