let star = "";
const length = 7;
for (let i = 0; i < length; i++) {
	for (let j = 0; j < i; j++) {
		star += "*";
	}
	star += "\n";
}
console.log(star);




function firstTask() {
	for (let i = 5; i < 11; i++) {
		console.log(i);
	}
}
firstTask()

function secondTask() {
	for (let i = 20; i > 9; i--) {
		if (i === 13) {
			break;
		}
		console.log(i);
	}
}
secondTask()


thirdTask
function thirdTask() {
	for (let i = 2; i < 11; i += 2) {

		console.log(i);
	}
}
thirdTask()

fourthTask
for (let i = 2; i <= 16; i++) {
	if (i % 2 === 0) {
		continue;
	} else {
		console.log(i);
	}
}

function fourthTask() {
	let result = 1;
	while (result < 14) {
		result += 2;
		console.log(result);
	}
}
fourthTask()

fifthTask

function fifthTask() {
	const arr = [];
	for (let i = 5; i < 11; i++) {
		arr[i - 5] = i
	}
	console.log(arr);
	return arr;
}
fifthTask()