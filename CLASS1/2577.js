// 숫자의 개수
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(Number);
let mul = 1;

input.forEach(element => {
    mul *= element;
});

for(let i=0; i<10; i++){
    let count = 0;
    for(let j=0; j<mul.toString().length; j++){
        if(Number(mul.toString()[j])== i) count++;
    }
    console.log(count);
}
