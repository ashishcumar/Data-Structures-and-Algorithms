// TWO WAYS TO FIND GCD OF TWO NUMBERS IS TO LOOP FROM ONE TO N OR DECREASE N T0 ONE (REVERSE LOOP):-

const gcd = (a, b) => {
  let gcdVal = 0;
  let min = a > b ? b : a;
  for (let i = 0; i <= min; i++) {
    if (a % i === 0 && b % i === 0) {
      gcdVal = i;
    }
  }
  return gcdVal;
};

// console.log(gcd(20, 40));
// console.log(gcd(20, 30));

const gcdReverse = (a, b) => {
  let gcdVal = 0;
  let min = a > b ? b : a;
  for (let i = min; i >= 1; i--) {
    if (a % i === 0 && b % i === 0 && i > gcdVal) gcdVal = i;
  }
  return gcdVal;
};

// console.log(gcdReverse(20, 40));
// console.log(gcdReverse(20, 30));

/// FOR MORE OPTIMISED SOLUTION GO TO EUCLIDEAN ALGO FILE

// GCD OF REPEATING NUMBERS :-

const repeatingGcd = () => {
  
}
