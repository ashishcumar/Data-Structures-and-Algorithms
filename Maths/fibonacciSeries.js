const getFibonacciseries = (n) => {
  let a = 0;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    // 1st way
    // let c = a + b;
    // a = b;
    // b = c;

    // 2nd Way
    // [a, b] = [b, a + b];

    // 3rd Way
    b = a + b;
    a = b - a;
  }

  return b;
};

console.log(getFibonacciseries(10));
