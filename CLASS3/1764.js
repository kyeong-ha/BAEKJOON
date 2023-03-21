// 듣보잡
let no_see_list = require('fs').readFileSync('test.txt').toString().trim().split('\n');
const[number_of_no_listen, number_of_no_see] = no_see_list.shift().split(' ').map(Number);
let no_listen_list = no_see_list.splice(0, number_of_no_listen);

// sort
no_listen_list.sort();
no_see_list.sort();

function isInclude(list, value){
    for(let i=0; i<list.length; i++){
        if(list[i] == value) {
            list.splice(i, 1);
            return true;
        }
    }
    return false;
}

let count = 0;
let result = [];

for(let i=0; i<number_of_no_listen; i++){
    if(isInclude(no_see_list, no_listen_list[i])){
        count++;
        result.push(no_listen_list[i]);
    }
}

console.log(count + '\n' + result.join('\n'));