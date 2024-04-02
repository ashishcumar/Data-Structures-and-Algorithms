const checkArmstrongNumber = (n) => {
  let sum = 0;
  let temp = n;
  while (temp > 0) {
    let lastNum = temp % 10;
    sum = sum + lastNum * lastNum * lastNum;
    temp = Math.floor(temp / 10);
  }
  console.log(sum);

  return sum === n;
};

console.log(checkArmstrongNumber(370));
console.log(checkArmstrongNumber(371));
console.log(checkArmstrongNumber(407));
console.log(checkArmstrongNumber(507));
