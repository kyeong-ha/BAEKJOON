// 검증수
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(Number);

let vc = 0; //verification number

input.forEach(element => {
    vc += Math.pow(element, 2);
});

console.log(vc % 10);