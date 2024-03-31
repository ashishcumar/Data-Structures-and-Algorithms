// BRUTE FORCE :- BY LOOPING FROM 1 TO N.

const getFactor = (n) => {
  const factors = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) factors.push(i);
  }
  return { factors, length: factors.length };
};

// console.log(getFactor(10));

// OPTIMISED APPROACH AND USING INBUILT FUNCTION FOR SQRT
const getFactors = (n) => {
  let count = 0;
  for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
      if (n % i === 0) {
        if(n / i === i) count++;
        else count += 2;
      }
  }
  return count;
};

// OPTIMISED APPROACH WITHOUT USING INBUILT FUNCTION FOR SQRT

const getFactors1 = (n) => {
    let count = 0;

    for(let i =0;i*i<=n;i++){
        if(n%i === 0){
            if(n/i === i) count++
            else count += 2
        }
    }

    return count;
}



console.log(getFactors(36));
