// Condition:
// Implement your own some method

// Example:
// const array = [1, 2, 3, 4, 5];
// const num = (element) => element > 3;
// console.log(array.some(num)); // true
// const num2 = (element) => element > 5;
// console.log(array.some(num2)); // false

const array = [1, 2, 3, 4, 5];

Array.__proto__.some = function(cb = (x) => x) {
  if(typeof cb !== "function") {
    throw new Error("Callback is not function!");
  }

  for(let i = 0; i < this.length; i++) {
    if (this[i] !== undefined && cb(this[i])) {
      return true;
    }
  }
  // for of ?

  return false;
}

console.log(array.some((elem) => elem > 5))