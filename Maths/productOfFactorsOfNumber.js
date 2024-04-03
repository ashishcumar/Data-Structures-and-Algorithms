// RUN SCRIPT :-  node productOfFactorsOfNumber.js

const getProductOfFactors = (n) => {
  let prod = 1;

  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      if (n / i === i) prod *= i 
      else prod *= i * (n / i)
    }
  }

  return prod;
};

console.log(getProductOfFactors(25));
 
// TIME COMPLEXITY IS :- O(sqrt(n)) BECAUSE LOOP WILL RUN UNTILL THE SQUARE ROOT OF N


