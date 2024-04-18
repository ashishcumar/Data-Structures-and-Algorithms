// RUN SCRIPT :- node Maximum-height-of-stairs.js

const maxStairs = (n) => {
  let sum = 0;
  let count = 0;

  while (n > 0) {
    count++;
    sum += count;
    n = n - sum;
  }

  if (n < 0) return count - 1;
  return count;
};
