// 구구단
const input = Number(require('fs').readFileSync('/dev/stdin'));

for(let i=1; i<=9; i++)
    console.log(input + ' * ' + i + ' = ' + input*i);