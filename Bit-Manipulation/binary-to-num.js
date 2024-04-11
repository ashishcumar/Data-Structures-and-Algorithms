// RUN SCRIPT node binary-to-num.js

// USING RECURSION
const power = (base,expo) => {
    if(expo == 0 ) return 1;
    return base * power(base,expo-1)
}

// USING WHILE LOOP
const powerByLoop = (base,expo) => {
    let num = 1
    while(expo > 0){
        num *= base
    }
    return num
}


// MAIN FUNCTION

const binaryToNum = (n) => {
    n = n.toString()
   let num = 0;
   for (let i = 0; i < n.length; i++) {
     num += powerValue(n[i] > 0 ? 2 : 0, n.length - 1 - i);
   }
   return num; 
}

// WITHOUT USING Power Function

const binToNum = (n) => {
    let num = n
    let decVal = 0
    let p = 1
    let temp = num
   while(temp){
    let lastDigit = temp%10
    temp = Math.floor(temp / 10);
    decVal += lastDigit * p
    p = p * 2
   }

   return decVal
}

console.log(binToNum(1101));
