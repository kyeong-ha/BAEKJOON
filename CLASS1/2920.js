// 음계
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(Number);

for(let i=0; i<7; i++){
    const diff = input[i]-input[i+1];
    if((diff != 1) && (diff != -1)){
        console.log('mixed');
        return;
    }
}
if(input[0]-input[1] == -1) console.log('ascending');
else if(input[0]-input[1] == 1) console.log('descending');