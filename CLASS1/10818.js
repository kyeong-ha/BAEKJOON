// 최소, 최대
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(Number);

const max = Math.max.apply(null, input.slice(1, input.length));
const min = Math.min.apply(null, input.slice(1, input.length));

console.log(min + " " + max);