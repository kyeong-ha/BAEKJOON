// 두 수 비교하기
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(Number);

if(input[0]>input[1])
    console.log('>');

else if(input[0]<input[1])
    console.log('<');

else if(input[0]===input[1])
    console.log('==');