// RUN SCRIPT :- node Count-Num-Of-Neg-In-Matrix.js


// BRUTE FORCE METHOD AND TIME COMPLEXITY IS :- O(n^2)
// MAINLY USEFULL WHEN ARRAY MATRIX IS NOT SORTED.
const countNegatives = (grid) => {
    let neg = 0
    for(let i =0;i<grid.length;i++){
        for(let j =0;j<grid[i].length;j++){
            if(grid[i][j] < 0) neg++
        }
    }
    return neg
}

// OPTIMAL METHOD AND TIME COMPLEXITY IS :-
// ONLY USEFULL WHEN ARRAY MATRIX IS SORTED

const countNegatives1 = (grid) => {
  let neg = 0
  for(let i =0;i<grid.length;i++){
    let left = 0
    let right = grid[0].length - 1
    while(left<=right){
        let mid = left + Math.floor((right-left)/2)
        if(grid[i][mid] < 0){
            right = mid-1
        }else{
            left = mid + 1
        }
    }
    neg += Math.abs(grid[i].length - 1 - right)
  }

  return neg
}

console.log(countNegatives1([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]))