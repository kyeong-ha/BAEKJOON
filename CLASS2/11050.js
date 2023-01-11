// 이항 계수 1
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const N = input[0];
const K = input[1];

function factorial(n){
    let result = 1;
    for(let i=1; i<=n; i++) result *= i;
    return result;
}

console.log(factorial(N)/(factorial(K)*factorial(N-K)));