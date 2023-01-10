// 별 찍기 - 2
const input = Number(require('fs').readFileSync('/dev/stdin'));

for(let i=1; i<=input; i++)
    console.log(' '.repeat(input-i) + '*'.repeat(i));