const add = function(...arg) {
	let addResult = 0
  addResult += arg[0]
  addResult += arg[1]
  return addResult
};

const subtract = function(...arg) {
  let tractResult = 0
  tractResult += arg[0]
  tractResult -= arg[1]
  return tractResult
};

/* const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
}; */

const sum = function(arg) {
  return arg.reduce((total, args) => total + args, 0)
};

const multiply = function(numbers) {
  var total = 1
  numbers.forEach(element => { 
    total *= element;
  });
  return total;
};

const power = function(num, pow) {
	let total = num
  for (let index = pow; index > 1; --index) {
    total *= num;
/*     console.log(total) */
  }
  return total
};

const factorial = function(target) {
	let total = 1
  if(target == 0){return 1}
  for (let index = 1; index <= target ; index++) {
    total *= index;
    console.log(" "+target, " "+index, " "+total)
  }
  return total;
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
