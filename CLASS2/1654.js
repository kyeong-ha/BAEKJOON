// 랜선 자르기
const input = require('fs').readFileSync('test.txt').toString().trim().split('\n');
let [number_of_lan, required_lan] = input[0].split(' ').map(Number);
let lan_array = input.slice(1).map(Number).sort((a,b) => b-a);
let max_length = 0;
let number_of_cutting = new Array(number_of_lan).fill(0); // 초기엔 자르지 않은 상태 

// 각각 몇개를 잘라낼 건지를 나타내는 배열
// required_lan를 만족할 때 때까지 반복
// 랜선 배열을 정렬
// if required_lan/number_of_lan > 1, 모든 number_of_cutting의 value에 +1
// 그리고나서 required_lan 업데이트
// else if required_lan/number_of_lan < 1, [n, n-1, n-2, ..., 1] 순으로 number_of_cutting의 value에 할당해줌
// 그리고나서 required_lan 업데이트

let array = [];
let num = 1;

while(required_lan > 0){

    if(required_lan/number_of_lan > 1){
        for(let i=0; i<number_of_cutting.length; i++){
            number_of_cutting[i]++;
        }
        required_lan -= number_of_lan;
    }

    else{
        array.push(num);
        required_lan -= num;
        if(required_lan >= num+1) num++;
    }
}

for(let i=0; i<number_of_cutting.length; i++){
    if(array.length == 0) break;
    number_of_cutting[i] += array.pop();
}
// console.log(lan_array)
// console.log(number_of_cutting)
console.log(Math.floor(lan_array[0]/number_of_cutting[0]));