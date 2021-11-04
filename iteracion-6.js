// Iteración#6

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];


let result = duplicates.filter((item,index)=>{
    return duplicates.indexOf(item) === index;
})
console.log(result);