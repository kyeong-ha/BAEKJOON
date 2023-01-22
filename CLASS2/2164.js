// 카드2
var input = require('fs').readFileSync('/dev/stdin').toString().trim();
input = Number(input);
let n = [];
for(let i=1; i<=input; i++){ n.push(i); }

while(n.length != 1){
    const length = n.length;
    
    n = n.filter((value, index) => index%2 != 0);
    if(length%2 != 0) n.push(n.shift());
}

console.log(n.toString());