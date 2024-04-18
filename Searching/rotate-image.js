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
