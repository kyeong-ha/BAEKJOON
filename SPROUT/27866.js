// 문자와 문자열
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const number = Number(input.pop());

console.log(input[0][number-1]);