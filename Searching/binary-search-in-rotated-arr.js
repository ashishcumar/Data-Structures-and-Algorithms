// RUN SCRIPT :- node binary-search-in-rotated-arr.js

//[4,5,6,7,0,1,2]
// [1,2,3,4,5,6,7,]
const binarySearchInRotatedArr = (arr, k) => {
  let l = 0;
  let r = arr.length - 1;

  //   while (l <= r) {
  //     let m = Math.floor(l + (r - l / 2));

  //     if (arr[m] === k) return m;
  //     else if (arr[m] < arr[r]) {
  //       if (k > arr[m] && k <= arr[r]) {
  //         l = m + 1;
  //       } else {
  //         r = m - 1;
  //       }
  //     } else {
  //       if (k < arr[m] && k >= arr[l]) {
  //         r = m - 1;
  //       } else {
  //         l = m + 1;
  //       }
  //     }
  //   }

  while (l <= r) {
    let m = Math.floor(l + (r - l) / 2);

    if (arr[m] === k) return m;
    else if (arr[m] < arr[r]) {
      if (k > arr[m] && k <= arr[r]) { // when we uncounter any sorted part 
        l = m + 1;
      } else {
        r = m - 1;
      }
    } else {
      if (k >= arr[l] && k < arr[m]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }
  }

  return -1;
};
console.log(binarySearchInRotatedArr([4, 5, 6, 7, 0, 1, 2], 1));
