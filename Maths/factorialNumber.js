// RUN SCRIPT :- node factorialNumber.js

const isFactorialNumber = (N) => {
  let fact = 1;
  let c = 1;

  while (fact <= c) {
    fact *= c;
    c++;
    if (fact === N) return true;
  }

  return false;
};

console.log(isFactorialNumber(5));
console.log(isFactorialNumber(6));
