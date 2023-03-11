// 나무 자르기
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [number_of_trees, required_length] = input[0].split(' ').map(Number);
const tree_array = input[1].split(' ').map(Number);

tree_array.sort((a,b) => b-a); // 내림차순 정렬

let height_of_cutter = tree_array[0];

while(true){
    let length = 0; // 현재 수집된 length
    
    for(let i=0; i<number_of_trees; i++){
        if(height_of_cutter > tree_array[i]) break; // 절단기의 높이가 잘라야할 나무보다 높으면 비교할 필요도 없음
        length += (tree_array[i] - height_of_cutter); // 현재 round에 수집된 길이에 추가
    }

    if(length >= required_length) break;
    height_of_cutter--;
}
console.log(height_of_cutter)