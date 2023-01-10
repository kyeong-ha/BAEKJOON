// 알파벳 찾기
const input = require('fs').readFileSync('/dev/stdin').toString();
let answer = [];

for(let i=97; i<=122; i++){
    let targetIndex = -1;

    for(let j=0; j<input.length; j++){
        if(String.fromCharCode(i) == input[j]){
            targetIndex = j;
            break;
        }
    }
    process.stdout.write(targetIndex + " ");
}