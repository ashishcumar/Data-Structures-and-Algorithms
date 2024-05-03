/*

Aggresive cows  :- 

the approach is to split the questions into two parts 
1st is to check all possible sitting aggregments and 
then check for the maximum distance at which we can make them sit.

1st function isPossible will have to sitting arrangments, distance and number of cows 
and with each iteration we check if all cows can sit with given conditions

2nd function is aggresive cows will have to return the maximum distance at which we can make them sit
 */

const isPossible = (arr, dist, cows) => {
  let last = arr[0];
  let count = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - last >= dist) {
      last = arr[i];
      count++;
    }
  }
  return count >= cows;
};

const aggresiveCows = (arr, k) => {
  arr = arr.sort((a, b) => a - b); // 1st sort the given arr

  let left = arr[0];
  let right = arr[arr.length - 1];

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (isPossible(arr, mid, k))
      left =
        mid +
        1; // if it is possible to stay at that distance then increase the distance
    else right = mid - 1; // else decrease the distance
  }
  return right;
};
