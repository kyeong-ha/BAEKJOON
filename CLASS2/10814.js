// 나이순 정렬 
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
input = input.slice(1, input.length);
let personArray = [];

// 나이, 이름을 각각 [0], [1] index에 저장
input.forEach(element => {
    personArray.push(element.trim().split(" "));
});

// 나이순으로 정렬
personArray = personArray.sort((a, b) => a[0]-b[0]);

// 출력형식에 맞게 Join
personArray.forEach((value, index) => {
    personArray[index] = value.join(" ");
});

console.log(personArray.join("\n"));