// 문자열 반복
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const S = Number(input[0]);

for(let i = 1; i < input.length; i++){
    const line = input[i].toString().trim().split(' ');
    const R = Number(line[0]);
    const P = line[1];

    for(let j=0; j<P.length; j++){
        process.stdout.write(P[j].repeat(R));
    }
    process.stdout.write('\n');
}
