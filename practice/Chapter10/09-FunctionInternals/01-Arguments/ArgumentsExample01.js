// 1
function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

// 3
let trueFactorial = factorial;

factorial = function () {
  return 0;
};

console.log(trueFactorial(5));  // 120
console.log(factorial(5));      // 0
