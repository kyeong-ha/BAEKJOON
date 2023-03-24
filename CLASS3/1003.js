// 피보나치 함수
const input = require('fs').readFileSync('test.txt').toString().trim().split('\n').map(Number);

let binary = [0, 0];
let result = [];

function fibonacci(n, binary){
    if(n == 0)
        return [binary[0]+1, binary[1]];

    const x = fibonacci(n-1, binary);
    return [x[1], x[0]+x[1]];
}

for(let i=1; i<input.length; i++)
    result.push(fibonacci(input[i], binary).join(' '));

console.log(result.join('\n'));