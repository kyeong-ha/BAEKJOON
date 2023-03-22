// Four Squares
let number = Number(require('fs').readFileSync('test.txt'));

const max_divide_number = Math.floor(Math.sqrt(number));
const min_divide_number = Math.floor(Math.sqrt(number/2));

function getMinimumPowNumber(number){
    let result = new Set(); // 중복 handling을 위해 Set으로 선언

    while(number > 0){
        number -= Math.pow(max_divide_number, 2);
        result.add(max_divide_number);
    }

    return result;
}
for(let i=max_divide_number; i>=min_divide_number; i--){
    const temp_number = number;
    
}

// while(number > 0){
//     const max_divide_number = Math.floor(Math.sqrt(number));
//     number -= Math.pow(max_divide_number, 2);

//     result.add(max_divide_number);
// }


// number = 27362
// divide_number = 165로 lenth을 계산한다

// divide_number-1 씩 줄이면서 length을 계산하는데,
// 계산하는 과정에서 마지막을 구할 때 length가 min이 아니라면 갱신하지 않는다.

// 아닌가 얘를 1/2로 나눠서 뭘 해야하나


console.log(result)
console.log(result.size);