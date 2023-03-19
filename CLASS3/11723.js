// 집합
let operations = require('fs').readFileSync('test.txt').toString().trim().split('\n');

let set = new Array(20).fill(0);
let result = '';

for(let i=1; i<operations.length; i++){
    let [ops, value] = operations[i].split(' ');
    value = Number(value);

    if(ops == 'add'){
        if(value >=1 && value <= 20) set[value] = 1;
    }

    else if(ops == 'remove'){
        if(value >=1 && value <= 20) set[value] = 0;
    }

    else if(ops == 'check'){
        if(value >=1 && value <= 20) result += (set[value] + '\n');
        else result += '0\n';
    }

    else if(ops == 'toggle'){
        if(value >=1 && value <= 20){
            if(set[value] == 1) set[value] = 0;
            else set[value] = 1;
        }
    } 

    else if(ops == 'all'){
        for(let i=0; i<=20; i++){
            set[i] = 1;
        }
    }

    else if(ops == 'empty'){
        for(let i=0; i<=20; i++){
            set[i] = 0;
        }
    }
}

console.log(result)

/*
class MySet{
    constructor(){
        this.set = new Array(20).fill(0);
    }

    add(x){
        if(x >=1 && x <= 20) this.set[x] = 1;
    }

    remove(x){
        if(x >=1 && x <= 20) this.set[x] = 0;
    }

    check(x){
        if(x >=1 && x <= 20) result += (this.set[x] + '\n');
        else result += '0\n';
    }

    toggle(x){
        if(x >=1 && x <= 20){
            if(this.set[x] == 1) this.set[x] = 0;
            else this.set[x] = 1;
        }
    }

    all(){
        for(let i=0; i<=20; i++){
            this.set[i] = 1;
        }
    }

    empty(){
        for(let i=0; i<=20; i++){
            this.set[i] = 0;
        }
    }
}
*/