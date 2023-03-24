// 1로 만들기
let x = +require('fs').readFileSync('test.txt');

let dp = new Array(x+1).fill(0);

for(let i=2; i<=x; i++){
    dp[i] = dp[i-1]+1;

    if(i%3 == 0) dp[i] = Math.min(dp[i], dp[i/3]+1);
    if(i%2 == 0) dp[i] = Math.min(dp[i], dp[i/2]+1);
}
console.log(dp[x]);