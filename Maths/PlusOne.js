// RUN SCRIPT :- node PlusOne.js

const plusOne = (arr) => {
  let n = arr.length;
  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] < 9) {
      arr[i]++;
      return arr;
    }
    arr[i] = 0;
  }
  arr.unshift(1);
  return arr;
};

// OTHER APPROACH IS BY RECURSION

const plusOne1 = (n, i = n.length - 1) => {
  if (n[i] < 9) {
    n[i] = n[i] + 1;
    return n;
  } else {
    n[i] = 0;
    if (i === 0) {
      n.unshift(1);
      return n;
    }
    return plusOne1(n, i - 1);
  }
};

console.log(plusOne1([9, 9, 9]));
