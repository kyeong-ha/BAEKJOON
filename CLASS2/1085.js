// 직사각형에서 탈출
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const x = input[0];
const y = input[1];
const w = input[2];
const h = input[3];

let distance = [];
// y=0; x=0; y-h=0; x-w=0;
distance.push(Math.abs(y)/Math.sqrt(Math.pow(0, 2)+Math.pow(1, 2)));
distance.push(Math.abs(x)/Math.sqrt(Math.pow(1, 2)+Math.pow(0, 2)));
distance.push(Math.abs(y-h)/Math.sqrt(Math.pow(0, 2)+Math.pow(1, 2)));
distance.push(Math.abs(x-w)/Math.sqrt(Math.pow(1, 2)+Math.pow(0, 2)));

//x^2+y^2; (w-x)^2+(h-y)^2;
distance.push(Math.sqrt(Math.pow(x, 2)+Math.pow(y, 2)));
distance.push(Math.sqrt(Math.pow((w-x), 2)+Math.pow((h-y), 2)));

console.log(Math.min.apply(null, distance));
