// 동전 0
let coin = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
let [number_of_coin, required_coin] = coin.splice(0, 2).map(Number);

let count = 0;
for(let i=coin.length-1; i>=0; i--){
    if(required_coin >= coin[i]){
        const quotient = Math.floor(required_coin/coin[i]);
        required_coin = required_coin%(quotient*coin[i]);
        
        count += quotient;
    }
}

console.log(count);