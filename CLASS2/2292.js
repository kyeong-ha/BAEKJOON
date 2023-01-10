// 벌집 
let input = Number(require('fs').readFileSync('/dev/stdin'));
let count = 1;

// n번째 열의 방개수 = 6*n
function a(){
    count++;
    for(let i=0; i < 6*(count-1); i++){
        input--;
        if(input == 0) return count;
    }
    a();
}

if(input == 1) console.log(count);
else{
    input--; a();
    console.log(count);
}