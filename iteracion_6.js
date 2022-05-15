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
  function removeDuplicates(param) {
    for(i = 0; i < param.length; i++){
        for(e = 0; e < param.length; e++){
            if(param[i]== param[e] && i!==e){
            console.log(param[e]);
            param.slice
            }
        }
        
    }
    console.log(param)
  }

  removeDuplicates(duplicates);