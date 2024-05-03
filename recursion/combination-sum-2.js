// Run Script :- node combination-sum-2.js

/*
 it is also same as combination sum 1 but in this there are possible chances of duplicate elements 
 for that be will use set to store the result instead of arr
 */

/// Its is a brute force approach and it will break down when the arr has so many elements
const getCombinations = (index, arr, target, result, temp = []) => {
  if (index === arr.length) {
    if (target === 0) {
      result.add(JSON.stringify([...temp].sort((a, b) => a - b)));
    }
    return;
  }

  // if we take same index element
  if (arr[index] <= target) {
    temp.push(arr[index]);
    getCombinations(index + 1, arr, target - arr[index], result, temp);
    temp.pop();
  }
  // if we don't take same index element
  getCombinations(index + 1, arr, target, result, temp);
};
const combinationSum2 = (nums, target) => {
  const result = new Set();
  getCombinations(0, nums, target, result, []);
  console.log({ result });
  return [...result].map((ele) => JSON.parse(ele));
};

// console.log(combinationSum([2, 3, 6, 7], 7));
// console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));

// OPTIMAL APPROACH :-


/*
in this optimal approach 
first we have to sort the given array
and then start the rescursion with same numbers of param as combination sum 1.
when recursion starts be will run a nested recursion from the index which 
we got in the params of function.
*/

const getCombinations2 = (index, arr, target, result, temp = []) => {
  if (target == 0) {
    result.push([...temp]);
    return;
  }

  for (let i = index; i < arr.length; i++) {
    if (i > index && arr[i] == arr[i - 1]) continue;
    if (arr[i] > target) break;

    temp.push(arr[i]);
    getCombinations2(i + 1, arr, target - arr[i], result, temp);
    temp.pop();
  }
};

const combinationSum22 = (nums, target) => {
  const result = [];
  nums.sort((a, b) => a - b);
  getCombinations2(0, nums, target, result, []);
  return result;
};

console.log(combinationSum22([10, 1, 2, 7, 6, 1, 5], 8));
