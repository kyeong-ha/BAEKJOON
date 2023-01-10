// ACM 호텔
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.slice(1, input.length);

input.forEach(element => {
    const targetInput = element.toString().trim().split(' ');
    const H = targetInput[0]; // 호텔의 층수
    const W = targetInput[1]; // 각 층의 방수
    let N = targetInput[2]; // 손님의 번호

    for(let i = 1; i <= W; i++){
        for(let j = 1; j <= H; j++){
            N--;

            if(N == 0) {
                if(i < 10)
                    console.log(j + "0" + i);
                else console.log(j + "" + i);
            }
        }
    }
});