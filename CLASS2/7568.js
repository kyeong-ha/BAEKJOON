// 덩치 
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const inputArray = input.slice(1, input.length);

// 키, 몸무게를 각각 [0], [1] index에 저장하여 2차원 array를 생성
const personArray = [];
inputArray.forEach(element => {
    personArray.push(element.trim().split(" ").map(Number));
});

// 키, 몸무게가 모두 상대가 있으면 rank++
let rankingArray = [];
personArray.forEach(targetElement => {
    let rank = 1;
    personArray.forEach(entireElement => {
        if((targetElement[0] < entireElement[0]) && (targetElement[1] < entireElement[1]))
            rank++;
    });
    rankingArray.push(rank);
});

console.log(rankingArray.join(" "));