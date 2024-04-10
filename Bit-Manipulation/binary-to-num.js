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
    n = n.toString()
    let num = 0
    let p = 1
    for(let i = n.length-1;i>=0;i--){
     if(n[i] == '1'){
        console.log({v:n[i],num,p})
         num = num + (p * p)
         p = (p*p) * 2;
     } 
    }
    return num
}

console.log(binToNum(1101));
