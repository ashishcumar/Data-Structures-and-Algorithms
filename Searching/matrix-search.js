// Run Script :-  node matrix-search.js

/*
brute force is to loop through the matrix row and check if the 
current row's left is <= target and right  >= target
and if yes then start binary seach in that row of matrix 
 
 */

const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];

// time complexity :- O(n*log(m))
// 0(n) is from the for outer while loop and 0(log(m)) is from inner binary search

const matrixSearch = (matrix, n) => {
  let i = 0;
  while (i < matrix.length) {
    let left = 0;
    let right = matrix[i].length - 1;
    let currArr = matrix[i];
    if (currArr[left] <= n && currArr[right] >= n) {
      while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (currArr[mid] === n) return { i, j: mid };
        else if (currArr[mid] > n) right = mid - 1;
        else left = mid + 1;
      }
    }
    i++;
  }
  return false;
};

// Optimal Approach

const matrixSearch2 = (matrix, n) => {
  let rowLen = matrix.length;
  let colLen = matrix[0].length;
  let left = 0;
  let right = rowLen * colLen - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    let midElemet = matrix[Math.floor(mid / colLen)][mid % colLen];
    if (midElemet === n) return true;
    else if (midElemet > n) right = mid - 1;
    else left = mid + 1;
  }

  return false;
};

console.log(matrixSearch2(matrix, 34));

