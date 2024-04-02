const reverseNumber = (n) => {
    
    let reversedNum = 0;
    while (n > 0) {
      let lastNum = n % 10;
      n = Math.floor(n / 10);
      reversedNum = reversedNum * 10 + lastNum;
    }
    return reversedNum;

}


console.log(reverseNumber(4543))