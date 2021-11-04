const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];

  

  function repeatCounter(words) {
    let counterCode = 0;
    let counterRepeat = 0;
    let counterEat = 0;
    let counterSleep = 0;
    let counterEnjoy = 0;
    let counterUpgrade = 0;
    for(let i = 0; i< counterWords.length; i++){
        if(words[i] === 'code'){
            counterCode += 1;
        }else if(words[i] === 'repeat'){
            counterRepeat += 1;
        }else if(words[i] === 'eat'){
            counterEat += 1;
        }else if(words[i] === 'sleep'){
            counterSleep += 1;
        }else if(words[i] === 'enjoy'){
            counterEnjoy += 1;
        }else if(words [i] === 'upgrade'){
            counterUpgrade += 1;
        }
    }
    return `
    Code se repite ${counterCode} veces. 
    Repeat ${counterRepeat} vez. 
    Eat ${counterEat} vez. 
    Sleep ${counterSleep} veces.
    Enjoy ${counterEnjoy} veces.
    Upgrade ${counterUpgrade} vez'`;
  }

  console.log(repeatCounter(counterWords));