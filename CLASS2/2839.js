// 설탕 배달
const input = Number(require('fs').readFileSync('test.txt'));

if(input === 1 || input === 2 || input === 4 || input === 7) console.log('-1');
else if(input%5 === 4 || input%5 === 2) console.log(Math.floor(input/5)+2);
else if(input%5 === 3 || input%5 === 1) console.log(Math.floor(input/5)+1);
else if(input%5 === 0) console.log(input/5);

// input % 5 === 4 인 경우 => 5kg:-1 / 3kg:+3 => +2
// input % 5 === 3 인 경우 => 3kg:+1          => +1
// input % 5 === 2 인 경우 => 5kg-2 / 3kg:+4  => +2
// input % 5 === 1 인 경우 => 5kg:-1 / 3kg:+2 => +1
// input % 5 === 0 인 경우 =>                 => +0

// 1, 2, 4, 7 은 8보다 작으므로 정확히 만들 수 없다.
// -> (3+5)보다 커야 정확히 만들 수 있음