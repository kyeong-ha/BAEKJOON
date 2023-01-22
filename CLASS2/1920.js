// 수 찾기
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(Number);

const N = input[0];
const nArray = input.slice(1, N+1).sort((a, b) => a-b);
const M = input[N+1];
const mArray = input.slice(N+2, input.length);

function BinarySearch(arr, targetValue){
    let start = 0;
    let end = nArray.length-1;

    while(start <= end){
        let mid = Math.floor((start + end)/2);

        if(arr[mid] === targetValue) return '1';
        else if(arr[mid] < targetValue) start = mid+1;
        else if(arr[mid] > targetValue) end = mid-1;
    }
    return '0';
}
let result = [];
mArray.forEach(element => {
    result.push(BinarySearch(nArray, element));
});

console.log(result.join('\n'));