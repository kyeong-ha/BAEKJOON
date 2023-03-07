// 마인크래프트
const input = require('fs').readFileSync('test.txt').toString().trim().split('\n');
let [height, width, inventory] = input[0].split(' ').map(Number);
let ground = input.slice(1).map(value => value.split(' ').map(Number));
let timer = 0;



// 전체 배열에서 전체 평균을 구한다?

let average_of_height = 0;
function setAverage(){
    average_of_height = 0;
    for(let i=0; i<ground.length; i++){
        average_of_height += ground[i].reduce((prev, curr) => prev + curr) / (height*width);
    }
    average_of_height = Math.round(average_of_height); // 반올림
}
// 전체 배열을 돌면서 전체 평균 이하인 땅 > 인벤토리에 있는 블록의 개수 이면 땅을 부셔야만 함(구할 때 평균 이상이면 블록의 개수 증가 시켜줘야함)
let number_of_blocks_required = 0; // 평균 높이로 맞추는 데에 필요한 블록 개수
function setRequiredBlocks(){
    for(let i=0; i<ground.length; i++){
        for(let j=0; j<ground[i].length; j++){
            if(ground[i][j] > average_of_height) 
            number_of_blocks_required--;
            else if(ground[i][j] < average_of_height) 
            number_of_blocks_required++; 
        }
    }
}
// 그 구한 전체 평균에 가깝도록 블록을 쌓거나 부신다
function levelingTheGround(){
    for(let i=0; i<ground.length; i++){
        for(let j=0; j<ground[i].length; j++){
            if(ground[i][j] > average_of_height){ // 평균 높이보다 크다면 땅을 부순다
                const distance = ground[i][j] - average_of_height;
                ground[i][j] -= distance; // 블록 제거
                timer += (distance*2); // 블록 1개당 2초의 시간이 소요됨
            }else if(ground[i][j] < average_of_height){ // 평균 높이보다 작다면 블록을 설치한다
                const distance = average_of_height - ground[i][j];
                ground[i][j] += distance; // 블록 추가
                timer += (distance*1); // 블록 1개당 1초의 시간이 소요됨
            }
        }
    }
}




setAverage();
setRequiredBlocks();
// console.log(average_of_height)
// 인벤토리에 있는 블록으로 설치할 수 없는 경우 가장 높은 height 부터 제거하면서 전체 평균에 도달할 수 있는 블록을 생성해야함
// 제거하면서 필요한 블록의 개수를 조정하고 만약 현재 인벤토리 블록의 개수로 설치할 수 있게 되면 땅을 설치하게 함
while(number_of_blocks_required > inventory){
    const maxValue = Math.max(...ground.flat());
    const maxIndex = [0, 0];

    if(maxValue != average_of_height) break;

    for(let i=0; i<ground.length; i++){
        maxIndex[0] = i;
        maxIndex[1] = ground[i].indexOf(maxValue);
        if(maxIndex[1] != -1) break;
    }

    ground[maxIndex[0]][maxIndex[1]] -= 1; // 블록 하나씩 제거
    // number_of_blocks_required++; // 전체 평균 도달을 위해 필요한 블록도 하나 증가
    inventory++;
    timer += 2;

    setAverage(); // 평균값 재설정
    setRequiredBlocks(); // 필요한 블록 개수 재설정
}

// 인벤토리에 있는 블록으로 충분히 설치할 수 있으면 전체 평균으로 땅을 설치함
levelingTheGround()

console.log(timer + ' ' + ground[0][0])
// console.log(timer)
