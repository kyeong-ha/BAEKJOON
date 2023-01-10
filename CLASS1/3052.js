// 나머지
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(Number);
let arr = [];

input.forEach(element => {
    arr.push(element % 42);
});
console.log(new Set(arr).size);