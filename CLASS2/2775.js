// 부녀회장이 될테야
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const T = input[0];
let a, b;
let sum = 0;

function getResidents(a, b) {
    for(let j=1; j<=b; j++) {
        if(a != 0) getResidents(a-1, j);
        else sum += j;
    }
}

for(let i=0; i<T; i++){
    sum = 0;
    a = input[2*i+1];
    b = input[2*i+2];

    getResidents(a-1, b);
    console.log(sum);
}