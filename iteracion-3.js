// Iteración#3

const numbers = [1, 2, 3, 5, 45, 37, 58];

let total = 0;

function sumAll(param) {
  for(let i = 0 ; i<param.length; i++){
    total += param[i];
  }
  return total;
}

console.log(sumAll(numbers));