// 기찍 N
const input = Number(require('fs').readFileSync('/dev/stdin'));
let answer = "";

for(let i = input; i >= 1; i--)
    answer += (i + '\n');

console.log(answer);