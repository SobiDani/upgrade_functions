

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

let longestWorld = " "


function findLongestWord(param) {
  for( i = 0; i < param.length; i++){
  if (param[i].length > longestWorld.length){

    longestWorld = param[i]
  }
}
}
findLongestWord(avengers)
console.log(longestWorld);