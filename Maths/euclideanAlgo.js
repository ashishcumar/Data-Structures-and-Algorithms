// BRUTE FORCE METHOD

const gcdLoop = (a, b) => {
  let min = a > b ? b : a;
  for (let i = min; i >= 1; i--) {
    if(a % i === 0 && b % i === 0) return i
  }
  return 'nothing'
};

console.log(gcdLoop(16,24));

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

// console.log(gcdRec(20, 40));

/// IT HAS TIME COMPLEXITY OF O(logn)


// GCD OF ARRAY 

const gcdArr = (arr) => {
   let gcdVal  = arr[0]
   for(let i =1;i<arr.length;i++){
    gcdVal = gcd(gcdVal,arr[i])
   }

   return gcdVal
}

console.log("gcdArr -->", gcdArr([20,40,10,5]));