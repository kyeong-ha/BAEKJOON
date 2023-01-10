// 단어 공부
const input = require('fs').readFileSync('/dev/stdin').toString().trim().toUpperCase().split("");
const object = new Object();
let maxKeys = [];

input.forEach((value, index) => {
    if(object.hasOwnProperty(value)) object[value]++;
    else object[value] = 1;
});

const arrKeys = Object.keys(object);
const arrValues = arrKeys.map(function (key) { return object[key]; });
const maxValue = Math.max.apply(null, arrValues);

arrKeys.forEach(element => {
    if(Number(object[element]) == maxValue)
        maxKeys.push(element);
});

if(maxKeys.length == 1) console.log(maxKeys.toString());
else console.log('?');