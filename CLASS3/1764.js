// 듣보잡
let list = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const[number_of_no_listen, number_of_no_see] = list.shift().split(' ').map(Number);

list.sort(); // 정렬을 하면 index i번째와 i+1번째 비교만을 통해 중복이 있는지 체크할 수 있음
             // 즉, 시간복잡도 O(N)

let count = 0; // 듣보잡의 수
let result = []; // 듣보잡의 명단

for(let i=0; i<list.length-1; i++){
    if(list[i] == list[i+1]) {
        count++;
        result.push(list[i]);
    }
}

console.log(count + '\n' + result.join('\n'));