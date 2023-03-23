// 문자열
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let result = [];

for(let i=1; i<input.length; i++){
    const first = input[i][0];
    const last = input[i][input[i].length-1];

    result.push(`${first}${last}`)
}

console.log(result.join('\n'));