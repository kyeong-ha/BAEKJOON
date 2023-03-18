// 랜선 자르기
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [number_of_lan, required_lan] = input[0].split(' ').map(Number);
let lan_array = input.slice(1).map(Number).sort((a,b) => b-a);

let max_length = 0;
let start_number = 1;
let end_number = lan_array[0];

function getCuttedNumber(max_length){
    let cutted_number = 0;

    for(let i=0; i<lan_array.length; i++){
        let number_of_cutting = 1;
        while(lan_array[i] - (max_length*number_of_cutting) >= 0){
            number_of_cutting++;
        }
        cutted_number += (number_of_cutting-1);
    }
    
    return cutted_number;
}

// Binary Search
while(true){
    max_length = Math.round((start_number+end_number)/2); // mid
    let cutted_number = getCuttedNumber(max_length);

    if(end_number == start_number) break;
    
    if(cutted_number < required_lan) 
        end_number = max_length-1;
    else if(cutted_number >= required_lan){
        start_number = max_length;
    }
}

console.log(max_length);