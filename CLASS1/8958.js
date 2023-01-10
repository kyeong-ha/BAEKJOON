// OX퀴즈
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
const n = input[0];
const result = input.slice(1, n+1);

let scoreArr = [];
result.forEach(element => {
    let score = 0;
    let continousScore = 0;
    for(let i = 0; i < element.length; i++){
        if(element[i] == 'O') {
            continousScore++;
            score += (continousScore * 1);
        }
        else if(element[i] == 'X') 
            continousScore = 0;
    }
    scoreArr.push(score);
});

scoreArr.forEach(element => {
    console.log(element);
});