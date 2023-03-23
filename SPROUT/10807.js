// 개수 세기
let n = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const required_number = Number(n.pop());
const numbers = n.pop().split(' ').map(Number);

console.log(numbers.filter((value) => value == required_number).length);