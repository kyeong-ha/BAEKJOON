// 숫자 카드 2
const input = require('fs').readFileSync('test.txt').toString().trim().split('\n');

const nCard = input[1].split(' ').map(Number).sort((a, b) => a-b);
const mCard = input[3].split(' ').map(Number);
let result = [];

const map = new Map();
nCard.forEach(element => {
    if(map.has(element)) map.set(element, map.get(element)+1);
    else map.set(element, 1);
});

mCard.forEach(element => {
    result.push(map.get(element)||0);
});
console.log(result.join('\n'));

// map은 hash table이기 때문에 조회하는 time complexity가 O(1)이다.
// 따라서 카운트를 세는 데에 map을 쓰는 것이 효과적이다.