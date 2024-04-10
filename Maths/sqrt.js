// RUN SCRIPT :- node sqrt.js

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