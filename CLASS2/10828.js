// 스택
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.slice(1, input.length);
let result = [];

class Stack{
    constructor(){ 
        this.stack = [];
    }
    push = (element) => this.stack.push(element);
    pop = () => { return this.empty() === 0 ? this.stack.pop() : -1; }
    size = () => { return this.stack.length; }
    empty = () => { return this.stack.length === 0 ? 1 : 0; }
    top = () => { return this.empty() === 0 ? this.stack[this.stack.length-1] : -1; }
};

let stack = new Stack();
input.forEach(element => {
    let [command, value] = element.split(' ');

    if(command == 'push') stack.push(value);
    else if(command == 'pop') result.push(stack.pop());
    else if(command == 'size') result.push(stack.size());
    else if(command == 'empty') result.push(stack.empty());
    else if(command == 'top') result.push(stack.top());
});
console.log(result.join('\n'));