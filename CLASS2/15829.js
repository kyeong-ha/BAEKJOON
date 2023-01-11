// Hashing
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
const L = Number(input[0]);
const string = input.slice(1, L+1).toString().trim().split("");

let r = 1;
const M = 1234567891;

let result = 0;
for(let i = 0; i < L; i++){
    result += ((string[i].charCodeAt(0)-96) * r) % M;
    r = (r * 31) % M;
}

console.log(result % M);