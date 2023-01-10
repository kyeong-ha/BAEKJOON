// 숫자의 합
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
const numbers = input.slice(1, input.length).toString();

let sum = 0;
for(let i=0; i<numbers.length; i++){
    sum += Number(numbers[i]);
}

console.log(sum);