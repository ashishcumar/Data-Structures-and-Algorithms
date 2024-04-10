const reverseNumber = (n) => {
  let reversedNum = 0;
  let negFlag = false;
  if (n < 0) {
    negFlag = true;
    n = Math.abs(n);
  }
  while (n > 0) {
    let lastNum = n % 10;
    n = Math.floor(n / 10);
    reversedNum = reversedNum * 10 + lastNum;
  }
  return negFlag ? reversedNum * -1 : reversedNum;
};

console.log(reverseNumber(4543));
