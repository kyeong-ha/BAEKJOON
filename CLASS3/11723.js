// 집합
let operations = require('fs').readFileSync('test.txt').toString().trim().split('\n');
const number_of_operations = operations.shift();

let set = new Set();
let result = [];

for(let i=0; i<number_of_operations; i++){
    const [ops, value] = operations[i].split(' ');


    if(ops == 'add' && (Number(value)>=1 && Number(value)<=20)) set.add(Number(value)); 

    else if(ops == 'remove') set.delete(Number(value)); 

    else if(ops == 'check'){
        if(set.has(Number(value))) result.push(1)
        else result.push(0);
    }

    else if(ops == 'toggle'){
        if(set.has(Number(value))) set.delete(Number(value));
        else {
            if(Number(value)>=1 && Number(value)<=20) set.add(Number(value));
        }
    }

    else if(ops == 'all'){
        for(let i=1; i<=20; i++){
            set.add(i);
        }
    }

    else if(ops == 'empty') set.clear();
}

console.log(result.join('\n'))