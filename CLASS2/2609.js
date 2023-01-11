// 최대공약수와 최소공배수
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const gcd = (a, b) => {
    if(b === 0) return a;
    return gcd(b, a % b);
};
const lcm = (a, b) => a * b / gcd(a, b);

console.log(gcd(input[0], input[1]));
console.log(lcm(input[0], input[1]));