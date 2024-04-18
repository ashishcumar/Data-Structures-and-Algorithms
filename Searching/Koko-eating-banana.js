// RUN SCRIPT :- node Koko-eating-banana.js

// BRUTE FORCE APPROACH

// not working properly for bigger number cases 
// time complexity is O(n*m)
// here n is max no of piles and m is max no of hours
function minEatingSpeed(piles, h) {
  if (piles.length === 1 && piles[0] > h) return Math.ceil(piles[0] / h);
  let c = Math.min(...piles);
  let max = Math.max(...piles);

  while (c <= max) {
    let hour = 0;
    for (let i = 0; i < piles.length; i++) {
      hour += Math.ceil(piles[i] / c);
    }
    if (hour > h) {
      c++;
    } else {
      return c;
    }
  }

  return c;
}

// OPTIMAL APPROACH BY USING BINARY SEARCH

// this function is to calculate the time required to eat all the bananas
// time complexity is O(n*log(max(piles)))
const requiredHours = (piles, k) => {
  return piles.reduce((acc, curr) => acc + Math.ceil(curr / k), 0);
};

const minEatingSpeedBs = (piles, h) => {
  let left = 1;
  let right = Math.max(...piles);
  let ans = 0;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    let totalHours = requiredHours(piles, mid);
    if (totalHours <= h) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return ans
};
