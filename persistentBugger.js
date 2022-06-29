// Conditions:
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative
// persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
  let num = String(num);
  let countPersistense = 0;

  while(num.length > 1) {
    num = Number(String(num).split("").reduce((acc, digit) => acc * Number(digit), 1));
    countPersistense++
  }

  return countPersistense
}

console.log(persistence(999))
