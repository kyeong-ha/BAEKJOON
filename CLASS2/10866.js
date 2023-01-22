// 덱
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.slice(1, input.length);

class Deque{
    constructor(){
        this.deque = [];
    }

    push_front = (x) => this.deque.unshift(x);
    push_back = (x) => this.deque.push(x);
    pop_front = () => { return this.empty() === 0 ? this.deque.shift() : -1 };
    pop_back = () => { return this.empty() === 0 ? this.deque.pop() : -1 };
    size = () => { return this.deque.length; }
    empty = () => { return this.deque.length === 0 ? 1 : 0; }
    front = () => { return this.empty() === 0 ? this.deque[0] : -1; }
    back = () => { return this.empty() === 0 ? this.deque[this.deque.length-1] : -1; }
};

let deque = new Deque();
let result = [];
input.forEach(element => {
    let [command, value] = element.split(' ');
    if(command === 'push_front') deque.push_front(value);
    else if(command === 'push_back') deque.push_back(value);
    else if(command === 'pop_front') result.push(deque.pop_front());
    else if(command === 'pop_back') result.push(deque.pop_back());
    else if(command === 'size') result.push(deque.size());
    else if(command === 'empty') result.push(deque.empty());
    else if(command === 'front') result.push(deque.front());
    else if(command === 'back') result.push(deque.back());
});

console.log(result.join('\n'));