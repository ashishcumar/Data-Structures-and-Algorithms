// RUN SCRIPT :- node PrimeFactorsOfN.js

const primeFactors = (n) => {
  let res = [];
  let i = 2;
  while (n > 1) {
    if (n % i === 0) {
      if (!res.includes(i)) res.push(i);
      n = n / i;
    } else {
      i++;
    }
  }
  return res;
};

// console.log(primeFactors(24));

const prodOfPrimeFactors = (n) => {
  let res = [];
  let i = 2;
  while (n > 1) {
    if (n % i === 0) {
      if (!res.includes(i)) res.push(i);
      n = n / i;
    } else {
      i++;
    }
  }
  return res.reduce((a,b) => a*b)
};

console.log(prodOfPrimeFactors(24));