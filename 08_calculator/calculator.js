const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function () {
  if (arguments[0].length === 0) return 0;
  const sumar = arguments[0].reduce((total, number) => total + number, 0);
  return sumar;
};

const multiply = function () {
  const multiplicar = arguments[0].reduce((total, number) => total * number, 1);
  return multiplicar;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function () {
  if (arguments[0] === 0) return 1;
  let fact = 1;
  for (let index = 2; index <= arguments[0]; index++) {
    fact *= index;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
