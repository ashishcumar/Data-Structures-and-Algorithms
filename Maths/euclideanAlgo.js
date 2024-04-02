// SOLUTION BY WHILE LOOP

const gcd = (a, b) => {
  while (a > 0 && b > 0) {
    if (a > b) a = a % b;
    else b = b % a;
  }

  return a > b ? a : b;
};

// console.log(gcd(20,40))

// SOLUTION BY RECURSION

const gcdRec = (a, b) => {
  if (a === 0) return b;
  return gcdRec(b % a, a);
};

console.log(gcdRec(20,40))

/// IT HAS TIME COMPLEXITY OF O(logn)
