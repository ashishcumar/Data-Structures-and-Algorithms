// RUN SCRIPT :- node median-matrix-2d.js


/// BRUTE FORCE APPROACH :-  O(n^2)

const nums = [
  [1, 5, 7, 9, 11],
  [2, 3, 4, 5, 10],
  [9, 10, 12, 14, 16],
];

const nums2 = [
  [1, 3, 5],
  [2, 6, 9],
  [3, 6, 9],
];
const matrixMedian = (matrix) => {
  let tempArr = [];
  for (let i = 0; i < matrix.length; i++) {
    tempArr.push(...matrix[i]);
  }
  tempArr.sort((a, b) => a - b);
  let medianIndex = Math.floor(tempArr.length / 2);
  return tempArr[medianIndex];
};

console.log(matrixMedian(nums));
console.log(matrixMedian(nums2));
