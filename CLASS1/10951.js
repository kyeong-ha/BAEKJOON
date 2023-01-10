// A+B - 4
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = [];

for(let i=0; i<input.length; i++){
    arr.push(input[i]);
}
arr.forEach(element => {
    const answer = element.toString().trim().split(' ').map(Number);
    console.log(answer[0]+answer[1]); 
});