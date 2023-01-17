// 단어 정렬 
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let string = input.slice(1, input.length+1);

//중복제거
let stringSet = new Set();
string.forEach(element => {
    stringSet.add(element);
});
string = Array.from(stringSet);

//사전순 정렬
string = string.sort();
//길이순 정렬
string = string.sort((a, b) => a.length - b.length);

console.log(string.join("\n"));