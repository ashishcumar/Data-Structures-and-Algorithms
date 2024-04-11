// RUN SCRIPT :- node factorialNumberLessThanN

const factorialsLessThanN = (n) => {
   let res = []
   let fac = 1
   let num = 1
   while(num <= n){
    fac *= num
    res.push(fac)
    num++
   }

   return res
}

// TIME AND SPACE COMPLEXITY IS O(n).