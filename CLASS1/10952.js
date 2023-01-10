// A+B - 5
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = [];

for(let i=0; i<input.length; i++){
    arr.push(input[i]);
}
for(let i=0; i<arr.length-1; i++){
    const answer = arr[i].toString().trim().split(' ').map(Number);
    console.log(answer[0]+answer[1]); 
}