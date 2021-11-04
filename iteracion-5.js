// Iteración#5

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param) {
  let sumNumber = 0;
  let sumLengthString = 0;
    for(let i = 0; i< param.length; i++){
    if(typeof param[i] === 'number'){
        sumNumber += param[i];
    }else{
        sumLengthString += param[i].length;
    }
    
  }
  console.log('La suma de los numeros es: ' + sumNumber  + '.');
  console.log('La longitud de la suma de los strings es: ' + sumLengthString + '.')
}

averageWord(mixedElements);