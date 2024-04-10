// RUN CODE :- node Exponential.js


// BRUTE FORCE 

const powB = (x,n) => {
    let count = 0
    let ans = 1
    while(count < n){
     ans = ans * x
     count++
    }

    return ans
}


// TIME COMPLEXITY :- 0(n) because it run for n times
console.log(powB(2, 5));
console.log(powB(2, 10));




// OPTIMISED APPROACH WITH TIME COMPLEXITY O(logn) 
// because the function uses a while loop that divides the value of n by 2 in each iteration until n becomes 0.
const pow =(x,n) => {
    let ans  = 1
    while(n > 0){
        if(n %2 !== 0){
          ans = ans *x 
          n = n - 1
        }
        else{
            n = n/2
            x = x * x
        }
    }
    return ans
}

console.log(pow(2.00000, 10));