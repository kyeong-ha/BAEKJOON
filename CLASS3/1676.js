// 팩토리얼 0의 개수
const input = Number(require('fs').readFileSync('/dev/stdin'));

function factorial(n){
    if(n==1 || n==0) return 1n;
    return BigInt(n)*BigInt(factorial(n-1));
}

const number = factorial(input).toString();
let number_of_zero = 0;

for(let i=number.length-1; i>=0; i--){
    if(number[i] == 0) number_of_zero++;
    else break;
}
console.log(number_of_zero)