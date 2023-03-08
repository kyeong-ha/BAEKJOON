// 마인크래프트
const input = require('fs').readFileSync('test.txt').toString().trim().split('\n');
let [height, width, inventory] = input[0].split(' ').map(Number);
let ground = input.slice(1).join(" ").split(" ");
const height_array = new Array(257).fill(0);

ground.forEach(v => height_array[v]++);

const answer = function (inventory, height_array) {
    let addition, removal;
    let [cur_height, cur_time, min_time] = [0, 0, Number.MAX_VALUE];
    
    for (let i=256; i >= 0; i--) {
        addition = 0;
        removal = 0;
        height_array.forEach((value, index) => {
            if (i < index) removal += (index - i) * value;
            else addition += (i - index) * value;
        });
        if (inventory < addition-removal) continue;
        cur_time = addition + removal * 2;
        if (min_time !== Number.MAX_VALUE && min_time < cur_time) break;
        if (min_time > cur_time) {
            min_time = cur_time;
            cur_height = i;
        }
    }
    if (min_time === Number.MAX_VALUE) min_time = 0;
    return `${min_time} ${cur_height}`;
};

console.log(answer(inventory, height_array));