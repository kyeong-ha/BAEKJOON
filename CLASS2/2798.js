// 블랙잭
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(Number);
const N = input[0];
const M = input[1];
const openedCard = input.slice(2, 2+N);

let sumCard = new Set();

openedCard.forEach((value, index) => {
    for(let i = index+1; i < N; i++){
        for(let j = index+1; j < N; j++){
            const sum = openedCard[index]+openedCard[i]+openedCard[j];
            if((i != j) && (sum <= M)) sumCard.add(sum);
        }
    }
});

console.log(Math.max.apply(null, Array.from(sumCard)));