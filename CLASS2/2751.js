// 수 정렬하기 2 
// https://brunch.co.kr/@swimjiy/12
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(Number(line))
}).on('close', function () {
    const n = input[0];
    let arr = input.slice(1, input.length);

    // 중복제거
    const set = new Set(arr);
    arr = Array.from(set);

    // 오름차순 정렬
    console.log(arr.sort((a,b)=> a-b).join('\n'));
    process.exit();
});