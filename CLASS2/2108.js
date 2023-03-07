// 통계학
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
input = input.slice(1, input.length);

function getMean(arr){
    return Math.round(arr.reduce((sum, curr) => sum + curr, 0)/arr.length);
}
function getMedian(arr){
    arr = arr.sort((a,b) => a-b);
    return arr[Math.floor(arr.length/2)];
}

function getMode(arr){
    let map = new Map();
    arr.forEach(element => {
        if(map.has(element)) map.set(element, map.get(element)+1);
        else map.set(element, 1);
    });

    const minValue = Math.max.apply(null, [...map.values()]);
    let minKey = [];
    map.forEach((value, key) => {
        if(value === minValue) minKey.push(key);
    });
    
    return minKey.length === 1 ? minKey[0] : minKey.sort((a,b) => a-b)[1];
}

function getRange(arr){
    return Math.max.apply(null, arr) - Math.min.apply(null, arr);
}

let result = [];
result.push(getMean(input));
result.push(getMedian(input));
result.push(getMode(input));
result.push(getRange(input));

console.log(result.join('\n'));