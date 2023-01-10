// 직각삼각형
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.slice(0, input.length-1);

input.forEach(element => {
    let targetInput = element.split(" ").map(Number);
    targetInput.sort(function (a,b){ return a-b; });

    if(Math.pow(targetInput[0], 2) + Math.pow(targetInput[1], 2) == Math.pow(targetInput[2], 2)) console.log('right');
    else console.log('wrong');
});