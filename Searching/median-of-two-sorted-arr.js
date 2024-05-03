// Run Script :- node median-of-two-sorted-arr.js

const v = [2, 3, 5, 8];
const v1 = [10, 12, 14, 16, 18, 20];


// time complexity => O(n)
const findMedianSortedArrays = (nums1, nums2) => {
  let res = [];

  while (nums1.length && nums2.length) {
    let ele = nums1[0] < nums2[0] ? nums1.shift() : nums2.shift();
    res.push(ele);
  }
  if (nums1.length) res.push(...nums1);
  else if (nums2.length) res.push(...nums2);

  // if res.length is even
  if (res.length % 2 === 0) {
    let ind = Math.floor(res.length / 2);
    let fInd = Math.floor(res[ind] + res[ind-1]) / 2;
    return fInd
  }
  // if res.length is odd
  return res[Math.floor(res.length / 2)];
};

console.log(findMedianSortedArrays(v, v1));


