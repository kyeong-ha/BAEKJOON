// 대소문자 바꾸기 
let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let result = [];
for(let i=0; i<input.length; i++){
    if(input.charCodeAt(i) >= 97 && input.charCodeAt(i) <= 122) 
        result.push(input[i].toUpperCase());
    else
        result.push(input[i].toLowerCase());
}

console.log(result.join(''));