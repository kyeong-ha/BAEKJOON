// 평균
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(Number);
const n = input[0];
const score = input.slice(1, n+1);
const M = Math.max.apply(null, score);

let modifiedScore = [];
score.forEach(element => {
    modifiedScore.push(element/M*100);
});

const result = modifiedScore.reduce(function add(sum, currValue) {
    return sum + currValue;
}, 0);

console.log(result/n);