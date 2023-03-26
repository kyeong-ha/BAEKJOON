// 1,2,3 더하기
const [testcase, ...integers] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
const available_numbers = [1, 2, 3];

/* 1로 N번 합하는 방법은 default로 선언한다 */
let result = new Array(testcase);
let length = [];

const getRedundantPermutations = (arr, N, add) => {
    const results = [];
    if (N === 1) return arr.map(v => [v]);

    arr.forEach((fixed, index, origin) => {
        const permutations = getRedundantPermutations(origin, N-1, add); 
        const attached = [];
        permutations.forEach((el, idx) => {
            const total_sum = permutations[idx].reduce((prev, curr) => prev + curr);
            if(fixed + total_sum <= add){
                attached.push([fixed, ...el]);
            }
        });
        results.push(...attached);
    });
    return results;
}

for(let i=0; i<testcase; i++){
    result[i] = new Array();
    for(let j=integers[i]-1; j>=1; j--){
        result[i].push(...getRedundantPermutations(available_numbers, j, integers[i]));
    }
    result[i] = result[i].filter(el => el.reduce((prev, curr) => prev + curr) == integers[i]);
    length.push(result[i].length+1);
}

console.log(length.join('\n'));