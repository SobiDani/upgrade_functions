const numbers = [12, 21, 38, 5, 45, 37, 6];

let total = 0

function average(param) {
    for(i = 0; i < param.length; i++){
        total += param[i]
    }
    total = total / param.length
}

average(numbers)
console.log(total)