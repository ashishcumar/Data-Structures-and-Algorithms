// RUN SCRIPT :- node rotate-image.js

/*
brute force :-  time complexity  = O(n*m)
here m is no of elements in a row
*/

/*
 we will travers the matrix from bottom to top row wise our 
 first subArr is the first element of all subArray in reverse 
 */

const rotate = (nums) => {
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    let temp = [];
    let row = 0;
    while (temp.length < nums[0].length) {
      let tempNum = nums[row][i];
      temp.unshift(tempNum);
      if (temp.length === nums[0].length) {
        res.push(temp);
      }
      row++;
    }
  }

  return res;
};


/// Otimized approach without using extra space :- 
const a = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
const rotate2 = () => {
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      let temp = a[i][j];
      a[i][j] = a[j][i];
      a[j][i] = temp;
    }
  }

  for (let i = 0; i < a.length; i++) {
    a[i] = a[i].reverse();
  }
  return a;
};