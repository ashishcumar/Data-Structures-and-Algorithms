const isNumPalindrom = (n) => {
    if(n<0) return false
    
    let temp = n;
    let reversedNum = 0;

    while(temp > 0){
     let lastNum = temp%10;
     reversedNum = reversedNum * 10 + lastNum;
     temp = Math.floor(temp/10)
    }

    return n === reversedNum
}

console.log(isNumPalindrom(121));
console.log(isNumPalindrom(-121));
console.log(isNumPalindrom(339));