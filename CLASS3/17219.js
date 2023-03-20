// 비밀번호 찾기
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [number_of_site, required_number] = input.shift().split(' ').map(Number);

let answer = [];
let map = new Map();

for(let j=0; j<number_of_site; j++){
    const [url, pw] = input[j].split(' ');
    map.set(url, pw);
}

for(let i=number_of_site; i<number_of_site+required_number; i++){
    const required_url = input[i];

    answer.push(map.get(required_url));
}

console.log(answer.join('\n'))