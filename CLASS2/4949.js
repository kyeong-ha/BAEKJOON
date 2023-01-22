// 균형잡힌 세상
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.slice(0, input.length-1);

let result = [];

input.forEach(element => {
    let stack = [];
    element = element.split('');

    for(let i=0; i<element.length; i++){
        if(element[i] === '(') stack.push('(');
        else if(element[i] === '[') stack.push('[');
        else if(element[i] === ')') {
            const removedElement = stack.pop();
            if(removedElement === undefined || removedElement != '(') {
                stack.push('false');
                break;
            }
        }
        else if(element[i] === ']') {
            const removedElement = stack.pop();
            if(removedElement === undefined || removedElement != '[') {
                stack.push('false');
                break;
            }
        }
    }
    stack.length === 0 ? result.push('yes') : result.push('no');
});

console.log(result.join('\n'));