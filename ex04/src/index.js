// Only change code below this line
function sumFibonacci(num) {
  if (num === 1)  {
    return [1];
  } else {
    fib = sumFibonacci;
    fib.push(fib[fib - 1] + fib[fib - 2]);
    return fib;
  }
};
// Only change code above this line

console.log(sumFibonacci(1)); // Change this line
console.log(sumFibonacci(10)); // Change this line
console.log(sumFibonacci(20)); // Change this line
console.log(sumFibonacci(4)); // Change this line
console.log(sumFibonacci(-5)); // Change this line
module.exports = sumFibonacci;
