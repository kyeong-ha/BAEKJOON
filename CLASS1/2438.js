// 별 찍기 - 1
const input = Number(require('fs').readFileSync('/dev/stdin'));

for(let i=1; i<=input; i++)
    console.log('*'.repeat(i));