// Iteración#2

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain America', 'Spiderman', 'Captain Marvel', 'Yoel Marti'];
function findLongestWord(param) {

let avengerLargo = param[0];

  for(let i = 0; i < avengers.length; i++){
    if(param[i].length > avengerLargo.length){
        avengerLargo = param[i];
    }
  }
  return avengerLargo;
}

console.log(findLongestWord(avengers));