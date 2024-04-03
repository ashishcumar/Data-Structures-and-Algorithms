// RUN SCRIPT :- node SeiveOFErotosthens.js

// BRUTE FORCE APPROACH
const isPrime = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i * i < n; i++) {
    if (n % i === 0) return false;
  }

  return true;
};

const primeNumberTillN = (n) => {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) arr.push(i);
  }

  return arr;
};

console.log(primeNumberTillN(6));

// TIME COMPLEXITY OF ABOVE SOLUTION IS O(n* sqrt(n))

// SEIVE OF EROTOSTHENS

const primeTillN = (n) => {
  let arr = [];
  for (let i = 2; i <= n; i++) {
    arr[i] = true;
  }
  for (let i = 2; i <= n; i++) {
    if (arr[i]) {
      for (let j = 2 * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  for (let i = 2; i <= n; i++) {
    if (arr[i]) console.log(i);
  }
};

// console.log(primeTillN(30));

// OPTIMISED APPROACH :-

const primeTillNOptimised = (n) => {
  let arr = [];
  for (let i = 2; i <= n; i++) {
    arr[i] = true;
  }
  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }

  for (let i = 2; i <= n; i++) {
    if (arr[i]) console.log(i);
  }
};

console.log(primeTillNOptimised(30));

// TIME AND SPACE COMPLEXITY :- O(n)
