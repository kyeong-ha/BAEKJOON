// 팰린드롬수
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
input = input.slice(0, input.length-1);

input.forEach(element => {
    const tempElement = element.toString().trim().split("");
    let answer = 'yes';
    for(let i=0; i<=tempElement.length/2; i++){
        if(tempElement[i] != tempElement[tempElement.length-1-i]){
            answer = 'no';
            break;
        }
    }
    console.log(answer);
});