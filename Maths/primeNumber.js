// RUN COMMAND :- node primeNumber.js

/*
PRIME NUMBER :- a positive integer greater than 1 that has exactly two factors: 1 and the number itself
*/

// BRUTE OR FIRST APPROACH
const isPrime = (n) => {
  if (n <= 1) return false;
  let count = 0;
  for (let i = 0; i * i < n; i++) {
    if (count > 2) return;
    if (n % i === 0) {
      if (n / i === i) count++;
      else count += 2;
    }
  }
  return count === 2 ? true : false;
};

// console.log(isPrime(9));

// 1st APPROACH IS TO EXCLUDE 1 AND THE NUMBER ITSELF FROM LOOP AND IF THE NUMBER GET DIVIDED BY ANY OTHER NUMBER THEN ITS NOT A PRIME A NUMBER;

const isPrime1 = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

// 2nd APPROACH IS TO CHECK WHETHER THE NUMBER IS DIVISIBLE BY 2 AND 3. BUT IN THIS SOLUTION THEIR ARE SOME ESCAPES LIKE :- 49;

const isPrime2 = (n) => {
  if (n <= 3) return true;
  if (n % 2 === 0 && n % 3 === 0) return false;
  return true;
};

// [5, 11, 17, 29, 37, 41, 53, 59,49, 67, 71, 97, 101, 127, 149, 179].forEach((num) => {
//     console.log(isPrime2(num));
// })

// COUNT PRIME IN A RANGE

const countPrimeInRange = (l, r) => {
  if (l > r) return "l should be smaller than r";
  let count = 0;
  for (let i = l; i <= r; i++) {
    if (isPrime1(i)) {
      count++;
    }
  }

  return count;
};

console.log(countPrimeInRange(15, 50));
