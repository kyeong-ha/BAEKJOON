// 과제 안 내신 분..?
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
input.sort((a, b) => a-b);

let result = [];
let match = 1;

for(let i=0; i<input.length; i++){
    if(input[i] != i+match){
        result.push(i+match);
        i--; match++;
    }
}
if(input[input.length-1] != 30) result.push(30);
console.log(result.join('\n'));