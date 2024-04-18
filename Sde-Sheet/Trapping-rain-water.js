// RUN SCRIPT :-  node Trapping-rain-water.js


// It has time complexity of O(n)
const trappingRainWater = (arr) => {
  let count = 0;
  let maxMin = [];

  /*
  this double for loop is storing value in array and then second loop is 
  calculating how much water can be stored in it.
  */

  //   for (let i = 0; i < arr.length; i++) {
  //     let maxLeft = i === 0 ? 0 : Math.max(...arr.slice(0, i));
  //     let maxRight = i + 1 < arr.length ? Math.max(...arr.slice(i + 1)) : 0;
  //     maxMin.push(Math.min(maxLeft, maxRight));
  //   }
  //   for (let i = 0; i < arr.length; i++) {
  //     let val = maxMin[i] - arr[i];
  //     if (val > 0) count += val
  //   }

  /*
  this for loop is calculating how much water can be stored in it by directly calculating possible 
  water storing value and adding it to total value 
  */
    for (let i = 0; i < arr.length; i++) {
      let maxLeft = i === 0 ? 0 : Math.max(...arr.slice(0, i));
      let maxRight = i + 1 < arr.length ? Math.max(...arr.slice(i + 1)) : 0;
      let val = Math.min(maxLeft, maxRight) - arr[i];
      if(val > 0) count += val
    //   maxMin.push(Math.min(maxLeft, maxRight));
    }

  return count;
};

console.log(trappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
console.log(trappingRainWater([4, 2, 0, 3, 2, 5]));
