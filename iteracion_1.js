function sum(numberOne , numberTwo) {
    if(numberOne < numberTwo){
        console.log(numberTwo + " Es mas alto");
    }
    else if(numberOne > numberTwo){
        console.log(numberOne + " Es mas alto");
    }
    else{
        console.log(numberOne +" y "+ numberTwo + " Son iguales");
    }
  }

  sum(3,2)