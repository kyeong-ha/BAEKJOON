// 그대로 출력하기 
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(input.join('\n'));