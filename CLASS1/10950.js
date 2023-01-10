// A+B - 3
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = Number(input[0]);
const arr = [];

for(let i=1; i<T+1; i++){
    arr.push(input[i]);
}
arr.forEach(element => {
    const answer = element.toString().trim().split(' ').map(Number);
    console.log(answer[0]+answer[1]); 
});