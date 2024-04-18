// RUN SCRIPT :- node min-day-to-make-bouquets.js
/*
we will make two function 
1 function isBqPossible to check whether it is possible to make a 
bouquet with given conditions and other main function which jsut returns the result
*/

// brute force solution with time complexity of :- O(nlogn)
// O(n) is for traversing the array in isBqPossible function
// O(logn) is from binary search in bouquet function

const isBqPossible = (bloomDays, bqNum, k, day) => {
  let bouquet = 0;
  let count = 0;

  for (let i = 0; i < bloomDays.length; i++) {
    if (bloomDays[i] <= day) count++;
    else if (bloomDays[i] > day && count > 0) {
      bouquet += Math.floor(count / k);
      count = 0;
    }
  }
  bouquet += Math.floor(count / k);
  if (bouquet >= bqNum) return true;
  else return false;
};

const bouquet = (bloomDays, bqNum, k) => {
  let minDay = Math.min(...bloomDays);
  let maxDay = Math.max(...bloomDays);
  let ans = -1;

  while (minDay <= maxDay) {
    let midDay = minDay + Math.floor((maxDay - minDay) / 2);
    if (isBqPossible(bloomDays, bqNum, k, midDay)) {
      ans = midDay;
      maxDay = midDay - 1;
    } else {
      minDay = midDay + 1;
    }
  }

  return ans;
};

console.log(bouquet([1, 10, 3, 10, 2], 3, 1));
console.log(bouquet([1, 10, 3, 10, 2], 3, 2));
console.log(bouquet([7, 7, 7, 7, 12, 7, 7], 2, 3));
