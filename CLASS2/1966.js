// 프린터 큐
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.slice(1, input.length);
let result = [];

function getPrintQueue(queue, location) {
    var answer = 1;
    
    while(queue.length != 0){
        // 현재 문서가 우선순위가 가장 높은 경우: 대기목록에서 꺼냄
        if(queue[0] === Math.max.apply(null, queue)){ 
            //만약 꺼내는 문서가 target문서라면 return 한다.
            if(location == 0) return answer;
            else {
                queue.shift();
                answer++; location--;
            }
        }
        // 현재 문서보다 더 높은 우선순위가 있는 경우: 현재 문서를 대기목록 마지막으로 옮김
        else {
            if(location == 0) location=queue.length;
            queue.push(queue[0]);
            queue.shift(); location--;
        }
    }
    return answer;
}

for(let i=0; i<input.length; i+=2){
    const [n, priority] = input[i].split(' ').map(Number);
    const document = input[i+1].split(' ').map(Number);
    
    result.push(getPrintQueue(document, priority));
}

console.log(result.join('\n'));