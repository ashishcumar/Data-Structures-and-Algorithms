// RUN SCRIPT :- node Trailing-zeros.js

// BRUTE FORCE METHOD :- calculate factorial and then check how many zeroes are there and return the count
// But this approach only work till n <= 10

const getFac = (n) => {
  if (n <= 1) return 1;
  return n * getFac(n - 1);
};

const getTrailingZeros = (n) => {
  let count = 0;
  let num = getFac(n);

  while (num > 0) {
    let last = num % 10;
    if (last === 0) {
      count++;
      num = Math.floor(num / 10);
    } else {
      num = 0;
    }
  }

  return count;
};

console.log(getTrailingZeros(10));

// OPTIMAL APPROACH IS TO CHECK NUMBERS OF 5 USING FOR LOOP
/*
 mainly 5 ans 2 are use to produce 0 in any number so we will check numbers of 5 in the given number n
 and multiply it with 5 and then check how many times 5 is there in the number
 time complexity is O(logn) because we are dividing/multiplying the number by 5 in each iteration
 */

const getTrailingZeros1 = () => {
  let count = 0;
  for (let i = 5; i <= n; i *= 5) {
    count += Math.floor(n / i);
  }
  return count;
};

// OPTIMAL APPROACH USING WHILE LOOP

const getTrailingZeros2 = () => {
  let count = 0;
  while (n !== 0) {
    n = Math.floor(n / 5);
    count += n;
  }
  return count;
};
