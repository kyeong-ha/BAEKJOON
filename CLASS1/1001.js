// A-B
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(Number);

console.log(input[0]-input[1]);