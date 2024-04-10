// RUN SCRIPT :- node Set-Matrix-Zero.js

// 
const setMatrixZero = (matrix) => {
  const row = Array.from(Array(matrix[0].length)).fill(0);
  const col = Array.from(Array(matrix[0].length)).fill(0);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        row[i] = 1;
        col[j] = 1;
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (row[i] === 1 || col[j] === 1) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix
};

/*
Time Complexity of this approach is 0(n*m) where n = is the row in matrix and m is the columns of matrix 
Space Complexity is 0(n)
*/


console.log(
  setMatrixZero([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);

console.log(
  setMatrixZero([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
);
