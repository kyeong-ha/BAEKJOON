// ATM
let time_to_withdraw = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const number_of_wating = Number(time_to_withdraw.shift());
time_to_withdraw = time_to_withdraw[0].split(' ').map(Number).sort((a,b)=>a-b);

function sumAllTime(arr){
    for(let i=1; i<arr.length; i++){
        arr[i] = arr[i]+arr[i-1];
    }

    return arr.reduce((prev, curr) => prev + curr)
}

console.log(sumAllTime(time_to_withdraw))