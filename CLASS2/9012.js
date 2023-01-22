// 괄호
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.slice(1, input.length);

let result = [];

input.forEach(element => {
    let stack = [];
    for(let i=0; i<element.length; i++){
        if(element[i] === '(') stack.push('(');
        else if(element[i] === ')') {
            if(stack.length >= 1) stack.pop();
            else {
                stack.push('(');
                break;
            }
        }
    }
    result += stack.length != 0 ? 'NO\n' : 'YES\n';
});

console.log(result);