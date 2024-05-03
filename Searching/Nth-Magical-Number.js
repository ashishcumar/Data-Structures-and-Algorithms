// Run Script :-  node Nth-Magical-Number.js

// Brute Force Approach  Time Complexity is :- O(n)
// it will run untill my count reaches n or exceed it

// it is giving time limit exceed error
function nthMagicalNumber(n, a, b) {
  if (n == 1) return 2;
  let count = 0;
  let modNum = 1000000007;
  n = n % modNum;
  a = a % modNum;
  b = b % modNum;
  let num = 2;
  while (count <= n) {
    if (num % a === 0 || num % b === 0) {
      count++;
      if (count === n) return num;
      num++;
    } else num++;
  }
}

// Optimised Approach Time Complexity is :- O(log(max(a,b)))
// it will run untill my count reaches n or exceed it

function nthMagicalNumber(n, a, b) {
  let l = Math.min(a, b);
  let r = n * l;
  let gcd = (x, y) => (y == 0 ? x : gcd(y, x % y));
  let lcm = (a * b) / gcd(a, b);
  while (l < r) {
    let mid = l + Math.floor((r - l) / 2);
    let factor =
      Math.floor(mid / a) + Math.floor(mid / b) - Math.floor(mid / lcm);
    if (factor < n) {
      l = mid + 1;
    } else {
      r = mid;
    }
  }
  const mod = 1e9 + 7;
  return l % mod;
}

console.log(nthMagicalNumber(4, 2, 3));
