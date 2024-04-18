// RUN SCRIPT :- node Sudoku-Solver.js

const arr = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [2, 6, 4, 0, 5, 0, 0, 0, 7],
  [0, 0, 0, 3, 6, 4, 8, 2, 0],
  [4, 0, 0, 7, 8, 0, 0, 0, 0],
  [5, 0, 7, 0, 0, 0, 0, 0, 8],
  [6, 0, 0, 4, 0, 0, 0, 0, 2],
  [0, 0, 0, 9, 0, 0, 2, 0, 0],
  [0, 0, 0, 5, 0, 6, 0, 8, 0],
  [0, 5, 0, 0, 0, 0, 3, 7, 0],
];

const steps = {}
const failedSteps = {};
const isValid = (arr, row, col, num) => {
  for (let i = 0; i < 9; i++) {
    /* This case is to check if the number is already present in the row or column */
    if (arr[i][col] == num || arr[row][i] == num) return false;
    /* This case is to check if the number is already present in the square of that 9 boxes */
    let tempRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    let tempCol = 3 * Math.floor(col / 3) + (i % 3);
    if (arr[tempRow][tempCol] == num) false;
  }
  return true;
};

/*
To Write solve function first we have to identify the empty indexes where we have 0 in the array
and we are find those places by nested for loops  
*/
const solve = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] == 0) {
        /* This for loop is to check if the number is valid the location or not*/
        for (let n = 1; n <= 9; n++) {
          if (isValid(arr, i, j, n)) {
            arr[i][j] = n;
            steps[`${i}_${j}`] = n;
            if (solve(arr) === true) return true;
            else {
              failedSteps[`${i}_${j}`] = arr;
              arr[i][j] = 0;
            }
          }
        }
        return false;
      }
    }
  }
  console.log({steps,failedSteps });
  return true;
};

console.log("Solve response -->", solve(arr));
