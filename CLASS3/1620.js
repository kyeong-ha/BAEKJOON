// 나는야 포켓몬 마스터 이다솜
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [number_of_poketmon, number_of_questions] = input.shift().split(' ').map(Number);

let result = [];

let string_to_num = new Map();
let num_to_string = new Map();
for(let i=0; i<number_of_poketmon; i++){
    string_to_num.set(input[i], i+1);
    num_to_string.set(i+1, input[i]);
}

for(let i=number_of_poketmon; i<number_of_poketmon+number_of_questions; i++){
    if(isNaN(parseInt(input[i]))){ // 문제가 알파벳인 경우
        result.push(string_to_num.get(input[i]));
    }
    else{ // 문제가 숫자인 경우
        result.push(num_to_string.get(parseInt(input[i])));
    }
}

console.log(result.join('\n'))