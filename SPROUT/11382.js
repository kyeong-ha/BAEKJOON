// 꼬마 정민
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(Number);

console.log(input.reduce((prev, curr) => prev + curr))