// 소수 구하기
let [start, end] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let result = [];

function isPrime(num){    
    if(num === 1) return false;
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i === 0) return false;
    }
    return true;
}

for(let i=start; i<=end; i++){
    if(isPrime(i)) result.push(i);
}

console.log(result.join('\n'));

// 나누는 몫과 나눠진 값은 반비례하기 때문에
// prime을 구할 때는 탐색범위는 루트(n)까지만 하면 된다.