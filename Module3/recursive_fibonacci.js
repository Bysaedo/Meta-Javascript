//Recursion
function fib(n) {
  //Base case
  if (n === 0) return 0;
  if (n === 1) return 1;
  //Recursive case
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(5));
console.log(fib(10));
