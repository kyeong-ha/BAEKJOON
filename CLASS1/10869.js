// 사칙연산
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const a = input[0];
const b = input[1];

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);