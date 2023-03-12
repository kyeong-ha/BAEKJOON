// 스택 수열
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/).map(Number).slice(1);
let sortedArray = input.slice().sort((a,b) => b-a); // 내림차순 정렬(time complexity를 위해)

let stack = [];
let result = ''; // +, - 을 담을 array

// idea
// 1. stack에 input[i]의 value가 들어올 때까지 push한다.
// 2. stack[lastIndex] == input[i] 라면 pop
// 2-1. stack이 비어있다면 break, 일치하지 않는다면 return(불가능한 경우로 판단)
// 3. 1-2번 반복

while(true){
    // 정렬해둔 array의 마지막 요소(가장 작은 값)이 작거나 같을 때만 stack에 push함
    while(sortedArray[sortedArray.length-1] <= input[0]){
        stack.push(sortedArray.pop());
        result += '+\n';
    }

    for(let i=0; i<input.length; i++){
        if(stack.length == 0) break;
        else if(stack[stack.length-1] == input[i]){
            stack.pop()
            result += '-\n'
        }
        else if(stack[stack.length-1] > input[i])
            return console.log('NO');
        else  break;
    }

    if(input.length == 0) break;
    else input.shift();
}

console.log(result);