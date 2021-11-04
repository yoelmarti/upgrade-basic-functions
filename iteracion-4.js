// Iteración#4

const numbers = [12, 21, 38, 5, 45, 37, 6];
const other = [4,5,12,288];

function average(param) {
let total = 0;
let average = 0;
  for(let i = 0 ; i<param.length; i++){
    total += param[i];
  }
  average = total / param.length;
  return average;
}

console.log(average(numbers) + ' - ' + average(other));
;