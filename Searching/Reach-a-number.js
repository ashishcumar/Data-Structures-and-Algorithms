// we have to reach to a given target number in minimum number of steps

// BRUTE FORCE APPROACH USING RECURSION But it will throught error on bigger input value

// time complexity is :- 0(2^n) because the function is recurrsivly exploring two branches at each step

const minSteps = (target, checkNum, step) => {
  if (Math.abs(checkNum) > target) return;
  if (checkNum === target) return step;
  const negPossibleStep = minSteps(target, checkNum - step - 1, step + 1);
  const posPossibleStep = minSteps(target, checkNum + step + 1, step + 1);
  return Math.min(negPossibleStep, posPossibleStep);
};
const reachNumber = (target) => {
  return minSteps(Math.abs(target), 0, 0);
};

// Optimal Approach O(log(target))
// we are running a while loop and incrementing our sum with num
const reachNumber2 = (target) => {
  let sum = 0;
  let num = 0;
  while (sum < target) {
    num++;
    sum += num;
  }

  return (sum - target) % 2 === 0 ? num : num % 2 === 0 ? num + 1 : num + 2;
};
