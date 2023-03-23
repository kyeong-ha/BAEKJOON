// 사파리 월드
const [n, m] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(Number);

console.log(Math.abs(n-m));