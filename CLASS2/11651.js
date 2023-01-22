// 좌표 정렬하기 2
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input.slice(1, input.length);

let points = [];
arr.forEach(element => {
    points.push(element.trim().split(' '));
});

const merge = function (left, right) { 
	const result = [];
	while (left.length !== 0 && right.length !== 0) {
		if(Number(left[0][1]) == Number(right[0][1])) Number(left[0][0]) <= Number(right[0][0]) ? result.push(left.shift()) : result.push(right.shift());	
        else Number(left[0][1]) <= Number(right[0][1]) ? result.push(left.shift()) : result.push(right.shift());	
	}

	return [...result, ...left, ...right];
}

const mergeSort = function (array) {
	if (array.length === 1) return array;

	const middleIndex = Math.floor(array.length / 2); 
	const left = array.slice(0, middleIndex);
	const right = array.slice(middleIndex);

	return merge(mergeSort(left), mergeSort(right));
}

// 오름차순 정렬
points = mergeSort(points);

let sortedArray = "";
points.forEach((value, element) => {
    sortedArray += value.join(" ") + '\n';
});

console.log(sortedArray);