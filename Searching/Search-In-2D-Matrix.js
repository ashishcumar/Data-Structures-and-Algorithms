// Run Script :- node Search-In-2D-Matrix.js

/*
In this question we will search the target in the 2d matrix
use a for loop to traverse the matrix and check if 
the and first and last index of current arr is equal to target or 
more than target if yes then use binary search loop to find the target.
*/

// time complexity for this approach is O(m * log(n))
// 0(m) is from the for loop and 0(log(n)) is from binary search

const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
  [100, 200, 300, 400],
];

const binSearch = (currArr, target) => {
  let left = 0;
  let right = currArr.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (currArr[mid] === target) return true;
    else if (currArr[mid] > target) right = mid - 1;
    else left = mid + 1;
  }

  return false;
};

const searchIn2D = (matrix, target) => {
  for (const element of matrix) {
    let left = 0;
    let right = matrix[0].length - 1;
    let currArr = element;

    if (target >= currArr[left] && target <= currArr[right]) {
      return binSearch(currArr, target);
    }
  }
  return false;
};


console.log(searchIn2D(matrix,11));