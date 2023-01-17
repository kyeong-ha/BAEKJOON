// 소수찾기 
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
let numberOfPrimes = input[0];
const primeNumber = input.slice(1, input[0]+1);

primeNumber.forEach(element => {
    if(Number(element) == 1){
        numberOfPrimes--;
    }
    
    for(let i=2; i<=Math.sqrt(Number(element)); i++){
        if(Number(element) % i == 0){
            numberOfPrimes--;
            break;
        }
    }
});

console.log(numberOfPrimes);