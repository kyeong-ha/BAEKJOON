// 달팽이는 올라가고 싶다
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const day = input[0];
const night = input[1];
const height = input[2];

if(day >= height) 
    console.log('1');
else if((height-day)%(day-night) != 0) 
    console.log(parseInt((height-day)/(day-night))+2);
else 
    console.log(parseInt((height-day)/(day-night))+1);