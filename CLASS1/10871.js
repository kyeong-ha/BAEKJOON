// X보다 작은 수
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(Number);
const N = input[0];
const X = input[1];
const A = input.slice(2, N+2);

A.forEach(element => {
    if(element < X)
        console.log(element);
});