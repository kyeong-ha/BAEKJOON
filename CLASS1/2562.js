// 최댓값
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(Number);
const max = Math.max.apply(null, input);

console.log(max);
console.log(input.indexOf(max)+1);