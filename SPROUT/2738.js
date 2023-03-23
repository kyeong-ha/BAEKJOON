// 행렬 덧셈
let matrix = require('fs').readFileSync('test.txt').toString().trim().split(/\s/).map(Number);
const n = matrix.shift();
const m = matrix.shift();
const matrix_ = matrix.splice(n*m, );

let result = [];
for(let i=0; i<n*m; i++){
    result.push(matrix[i]+matrix_[i]);
}

for(let i=0; i<n*m; i+=m){
    console.log(result.slice(i, i+m).join(' '));
}