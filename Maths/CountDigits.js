const countDigits = (n) => {
  let count = 0;
  while (n > 0) {
    count++;
    n = Math.floor(n / 10);
  }

  return count
};

console.log(countDigits(1));
console.log(countDigits(12));
console.log(countDigits(123));
console.log(countDigits(1234));

// TIME COMPLEXITY IS :- 0(logn) or 0(log base 10 of n)