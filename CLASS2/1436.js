// 영화감독 숌
const input = require('fs').readFileSync('/dev/stdin').toString();
let count = 0;
let result = 0;

function zeroPadding(n, digits){
    let zero = '';
    n = n.toString();

    if(n.length < digits){
        for(let i=0; i<digits-n.length; i++){
            zero += '0';
        }
    }
    return (zero+n);
}

for(let i=0; i<input; i++){
    if(count>=input) break;
    i = i.toString();
    if(i[i.length-3] === '6' && i[i.length-2] === '6' && i[i.length-1] === '6'){
        for(let j=0; j<1000; j++){
            if(count>=input) break;
            result = i + zeroPadding(j, 3);
            count++;
        }
    }
    else if(i[i.length-2] === '6' && i[i.length-1] === '6'){
        for(let j=0; j<100; j++){
            if(count>=input) break;
            result = i + '6' + zeroPadding(j, 2);
            count++;
        }
    }
    else if(i[i.length-1] === '6'){
        for(let j=0; j<10; j++){
            if(count>=input) break;
            result = i + '66' + j;
            count++;
        }
    }
    else {
        result = i.toString() + '666';
        count++;
        j=0;
    }
}

console.log(Number(result));

// 0 1 2 3 4 5 6(10) 7 8 9
// 10 11 12 13 14 15 16(10) 17 18 19...
// 100 101 102 ... 165 166(100) 167... 

// 연속된 6이 0개면 맨 뒤에  +666
// 연속된 6이 1개면 맨 뒤에 66 + 10번 순회
// 연속된 6이 2개면 맨 뒤에 6 + 100번 순회
// 연속된 6이 3개면 맨 뒤에 1000 번 순회