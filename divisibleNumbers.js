// Condition:
// Complete the function that takes 3 numbers x, y and k (where x ≤ y),
// and returns the number of integers within the range [x..y] (both ends included)
// that are divisible by k.
// https://www.codewars.com/kata/55a5c82cd8e9baa49000004c

function divisibleCount(x, y, k) {
  if(x % k == 0) {
    return Math.floor((y / k) - (x / k)) + 1;
  }

  return Math.floor(y / k) - Math.floor(x / k);
}

console.log(divisibleNumbers(11, 6, 2))