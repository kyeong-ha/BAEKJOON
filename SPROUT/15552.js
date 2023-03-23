// 빠른 A+B
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let result = [];
for(let i=1; i<input.length; i++){
    const [x, y] = input[i].split(' ').map(Number);
    result.push(x+y);
}

console.log(result.join('\n'));