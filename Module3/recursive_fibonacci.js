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

//Functional programming paradigm
function addTwoNums(a, b) {
  console.log(a + b);
}

function randomNum() {
  return Math.floor(Math.random() * 10 + 1);
}
function specificNum() {
  return 42;
}

var useRandom = true;

var getNumber;

if (useRandom) {
  getNumber = randomNum;
} else {
  getNumber = specificNum;
}

addTwoNums(getNumber(), getNumber());
