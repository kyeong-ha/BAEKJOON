// 체스판 다시 칠하기 
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
const N = Number(input[0]);
const M = Number(input[1]);
let blackFirstCountArray = new Array(N-8);
let whiteFirstCountArray = new Array(N-8);

function isEqual(arr1, arr2){
    let notEqualCount = 0;
    for(let i=0; i<8; i++){
        for(let j=0; j<8; j++){
            if(arr1[i][j] != arr2[i][j]) notEqualCount++;
        }
    }
    return notEqualCount;
    // [0,1] [0,3] [0,5] [0,7] -> x:짝 y:홀
    // [1,0] [1,2] [1,4] [1,8] -> x:홀 y:짝 
}

function getMinValue(arr){
    let columnMinValue = [];
    arr.forEach(element => {
        columnMinValue.push(Math.min.apply(null, element));
    });
    return Math.min.apply(null, columnMinValue);
}

// MAIN

// 1. String to Array
let inputBoard = input.slice(2, N+2);
inputBoard.forEach((value, index) => {
    inputBoard[index] = value.split("");
});

// 2. 8x8 체스판 생성 (slide window)
const blackFirstBoard = new Array(8);
const whiteFirstBoard = new Array(8);
for(let i=0; i<8; i++){
    blackFirstBoard[i] = new Array(8);
    whiteFirstBoard[i] = new Array(8);

    for(let j=0; j<8; j++){    
        if((i%2==0 && j%2!=0) || (i%2!=0 && j%2==0)) {
            whiteFirstBoard[i][j] = 'B';
            blackFirstBoard[i][j] = 'W';   
        }
        else {
            whiteFirstBoard[i][j] = 'W';
            blackFirstBoard[i][j] = 'B';
        }
    }
}

// B 먼저 시작하는 체스판과 W 먼저 시작하는 체스판 각각 slide window로 적용하여 맞지 않는 개수를 카운트
for(let i=0; i<=N-8; i++){
    blackFirstCountArray[i] = new Array(M-8);
    whiteFirstCountArray[i] = new Array(M-8);
    let count = 0;

    for(let j=0; j<=M-8; j++){
        let targetArray = inputBoard.slice(i, i+8);
        targetArray.forEach((value, index) => {
            targetArray[index] = value.slice(j, j+8);
        });

        count = isEqual(targetArray, blackFirstBoard);
        blackFirstCountArray[i][j] = count;
        count = isEqual(targetArray, whiteFirstBoard);
        whiteFirstCountArray[i][j] = count;
    }
}

// 카운트한 값 중에서 Min값 추출
let blackFirstMinValue = getMinValue(blackFirstCountArray);
let whiteFirstMinValue = getMinValue(whiteFirstCountArray);

// 둘 중에 더 작은 값을 출력
blackFirstMinValue < whiteFirstMinValue ? console.log(blackFirstMinValue) : console.log(whiteFirstMinValue);
