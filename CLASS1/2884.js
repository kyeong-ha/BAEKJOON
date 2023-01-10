// 알람 시계
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let hour = input[0];
let minute = input[1];

minute -= 45;
if(minute < 0){
    hour--;
    minute += 60;
}
if(hour < 0)
    hour += 24;

console.log(hour + " " + minute);