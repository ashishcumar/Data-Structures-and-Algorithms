// RUN SCRIPT :- node DistinctPrimeFactors.js


// BRUTE FORCE APPROACH WITH TIME COMPLEXITY OF O(N)
const distinctPrimeFactors = (n) => {
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
    return res.length;
};

const nums = [2, 4, 3, 7, 10, 6];

const distinctPrimeFactors1 = function (nums, set = new Set()) {
  for (let x of nums) {
    let y = 2;
    while (y * y <= x) {
      if (x % y == 0) {
        // less strict equals -> faster runtime?
        set.add(y), (x /= y), (y = 2);
        continue;
      }
      y++;
    }
    if (x > 1) set.add(x);
  }

  return set.size;
};

console.log(distinctPrimeFactors1(nums));