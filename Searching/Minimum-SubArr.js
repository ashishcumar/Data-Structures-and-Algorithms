// Optimised approach with time complexity of 0(n)


/*
 i am iterating over each num in arr and then adding it to sum 
 if any point sum become greater or equal to the target valuer then
 we start while loop and start remove that num from sum by remove 
 arr's start elemnet and that's how sliding window works
 */
const minSubArr = (nums, k) => {
  let a = 0;
  let sum = 0;
  let minLen = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    while (sum >= k) {
      minLen = Math.min(minLen, i - a + 1);
      sum -= nums[a];
      a++;
    }
  }

  return minLen === Number.MAX_SAFE_INTEGER ? 0 : minLen;
};
