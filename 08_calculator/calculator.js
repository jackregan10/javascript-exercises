const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sum = 0;
	arr.map((num) => sum += num);
  return sum;
};

const multiply = function(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let product = 1;
  arr.map((num) => product *= num);
  return product;

};

const power = function(a, b) {
	let product = a;
  for (i = 1; i < b; i++) {
    product *= a;
  }
  return product;
};

const factorial = function(a) {
  let factorial = 1;
  while (a != 0) {
    factorial *= a;
    a--;
  }
	return factorial;
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
