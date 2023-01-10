// 분해합 
const input = require('fs').readFileSync('/dev/stdin').toString();

const searchSpace = Number(input) - (input.length * 9);
for(let i = searchSpace; i < input; i++){
    const iToString = i.toString();
    let sum = i;
    for(let j = 0; j < iToString.length; j++){
        sum += Number(iToString[j]);
    }
    if(sum == Number(input)) {
        console.log(i);
        return;
    }
}
console.log('0');