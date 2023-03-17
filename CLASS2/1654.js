// 랜선 자르기
const input = require('fs').readFileSync('test.txt').toString().trim().split('\n');
let [number_of_lan, required_lan] = input[0].split(' ').map(Number);
let lan_array = input.slice(1).map(Number).sort((a,b) => b-a);
let max_length = 0;

// 각각 몇개를 잘라낼 건지를 나타내는 배열
// required_lan를 만족할 때 때까지 반복
// 랜선 배열을 정렬
// if required_lan/number_of_lan > 1, 모든 number_of_cutting의 value에 +1
// 그리고나서 required_lan 업데이트
// else if required_lan/number_of_lan < 1, [n, n-1, n-2, ..., 1] 순으로 number_of_cutting의 value에 할당해줌
// 그리고나서 required_lan 업데이트

// max_length = 가장 큰 값의 Math.floor(1/i)

let divide_num = 1;
let cutting_array = new Array(lan_array.length).fill(0);

function getCuttedNumber(cutting_array){
    let cutted_number = 0;

    for(let i=0; i<lan_array.length; i++){
        let number_of_cutting = 1;
        while(lan_array[i] - (max_length*number_of_cutting) >= 0 && cutted_number < required_lan){
            number_of_cutting++;
        }
        cutting_array[i] = number_of_cutting-1;
        cutted_number += (number_of_cutting-1);
    }

    return cutted_number;
}

let dv = 1;

while(true){
    max_length = Math.floor(lan_array[0]/divide_num);

    // console.log(max_length)
    // console.log(divide_num)
    // console.log(lan_array)
    
    let cutted_number = getCuttedNumber(cutting_array);

    // console.log(cutted_number)
    // console.log(cutting_array)

    if(cutted_number >= required_lan) break;
    else divide_num++;
}

let start_number = Math.floor(lan_array[0]/(divide_num)); //133
let end_number = Math.floor(lan_array[0]/(divide_num-1)); //160

console.log(start_number)
console.log(end_number)
// 이진탐색
while(end_number-start_number != 1){
    max_length = Math.floor((start_number+end_number)/2);

    let cutted_number = getCuttedNumber(cutting_array);

    if(cutted_number >= required_lan){
        start_number = max_length;
    }else end_number = max_length;
}

console.log(max_length);
// divide_num-1 ~ divide_num 
// prev ~ curr
// 133 ~ 160
// round 1 : 146