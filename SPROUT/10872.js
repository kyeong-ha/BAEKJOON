// 팩토리얼
const input = +require('fs').readFileSync('/dev/stdin');

function factorial(n){
    if(n == 0) return 1;

    return factorial(n-1)*n;
}

console.log(factorial(input));