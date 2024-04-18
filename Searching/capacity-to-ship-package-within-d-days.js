// Run Script :- node capacity-to-ship-package-within-d-days.js
// this qestion is same as koko eating banana and maximum bouquets problem

// it also has the time complexity of O(n*log(max(weights))) same as above questions

const isPossible = (weights, pWeights, days) => {
  let sum = 0;
  let d = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += weights[i];
    if (sum >= pWeights) {
      if (sum > pWeights) i--;
      d++;
      sum = 0;
    }
  }

  if (sum > 0) {
    d++;
    sum = 0;
  }

  return d <= days;
};

const shipWithinDays = (weights, days) => {
  let minW = Math.max(...weights);
  let maxW = weights.reduce((acc, curr) => acc + curr);
  let ans = Number.MAX_SAFE_INTEGER;

  while (minW <= maxW) {
    let mid = minW + Math.floor((maxW - minW) / 2);
    if (isPossible(weights, mid, days)) {
      ans = Math.min(ans, mid);
      maxW = mid - 1;
    } else {
      minW = mid + 1;
    }
  }

  return ans;
};
