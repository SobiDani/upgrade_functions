const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

let totalNumbers = 0;
let totalWords = 0;
let total= 0;

function averageWord(param) {
    for(i = 0; i < param.length; i++){
        if (typeof param[i] === "string") {
            totalWords += param[i].length
        }
        else{
            totalNumbers += param.length
        }
    }
    total = totalNumbers + totalWords
}
averageWord(mixedElements)
console.log(total)