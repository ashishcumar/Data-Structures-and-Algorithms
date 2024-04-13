// RUN SCRIPT :- node sqrt.js

// USING RUCURSION
const sqrt = (n) => {
    let i =1;
    while(i*i <= n){
        i++
    }
    if(i*i !== n) return i-1
    return i
}

/// TIME COMPLEXITY IS O(logn) 
console.log(sqrt(225))

// USING BINARY SEARCH 

const sqrtBs = (n) => {
   let l = 1
   let r = n

   while(l <= r){
    let m = Math.floor(l + (r-l/2))
    let tempSq = m*m
    if(tempSq === n) return m
    else if (tempSq > n) r = m-1
    else l = m+1
   }

   return l
}

console.log(sqrtBs(224));