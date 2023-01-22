// 제로
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
input = input.slice(1, input.length);

let result = [];
input.forEach(element => {
    if(element == 0) result.pop();
    else result.push(element);
});

if(result.length > 0) console.log(result.reduce((sum, curr) => curr = sum+curr));
else console.log('0');