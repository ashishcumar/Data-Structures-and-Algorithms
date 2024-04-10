// RUN SCRIPT :- node AlternateDigitSum.js

// using All js inbuilt functions WITH TIME COMPLEXITY OF O(N)
const AlternateDigitSum = (n) => {
  return [...`${n}`]
    .map((d, i) => d * (i % 2 === 0 ? 1 : -1))
    .reduce((a, b) => a + b);
};
console.log(AlternateDigitSum(25));

// using basic loop WITH TIME COMPLEXITY OF O(N)

const AlternateDigitSum1 = (n) => {
  n = n.toString();
  let res = 0;
  for (let i = 0; i < n.length; i++) {
    res += n[i] * (i % 2 === 0 ? 1 : -1);
  }

  return res;
};
