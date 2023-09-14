const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;

};

const sum = function(numbers) {
  return numbers.reduce((partialSum, a) => partialSum + a,0);
  
  // let result = 0;
  // numbers.forEach(item => {
  //   result += parseInt(item);
  // })
  // return result;
	
};

const multiply = function(numbers) {
  return numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

};

const power = function(a,b) {
	return Math.pow(a,b);
  
  // result = 1;
  // for (let index = 0; index < b; index++) {
  //   result *= a;
    
  // }
  // return result;
};

const factorial = function(number) {
  result = 1;
	for (let index = 1; index <= number; index++) {
    result *= index;
    
  }
  return result;
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
