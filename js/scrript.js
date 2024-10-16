// let star = "";
// const length = 7;
// for (let i = 0; i < length; i++) {
// 	for (let j = 0; j < i; j++) {
// 		star += "*";
// 	}
// 	star += "\n";
// }
// console.log(star);




// function firstTask() {
// 	for (let i = 5; i < 11; i++) {
// 		console.log(i);
// 	}
// }
// firstTask()

// function secondTask() {
// 	for (let i = 20; i > 9; i--) {
// 		if (i === 13) {
// 			break;
// 		}
// 		console.log(i);
// 	}
// }
// secondTask()


// thirdTask
// function thirdTask() {
// 	for (let i = 2; i < 11; i += 2) {

// 		console.log(i);
// 	}
// }
// thirdTask()

// fourthTask
// for (let i = 2; i <= 16; i++) {
// 	if (i % 2 === 0) {
// 		continue;
// 	} else {
// 		console.log(i);
// 	}
// }

// function fourthTask() {
// 	let result = 1;
// 	while (result < 14) {
// 		result += 2;
// 		console.log(result);
// 	}
// }
// fourthTask()

// fifthTask

// function fifthTask() {
// 	const arr = [];
// 	for (let i = 5; i < 11; i++) {
// 		arr[i - 5] = i
// 	}
// 	console.log(arr);
// 	return arr;
// }
// fifthTask()

// Coding Exercise 4: 

// function firstTask() {
// 	const arr = [3, 5, 8, 16, 20, 23, 50];
// 	const result = [];
// 	for (let i = 0; i < arr.length; i++) {
// 		result[i] = arr[i]
// 	}
// 	console.log(result);
// 	return result;
// }
// firstTask()

// function secondTask() {
// 	const data = [5, 10, 'Shopping', 20, 'Homework'];
// 	for (let i = 0; i < data.length; i++) {
// 		let a = data[i];
// 		if (typeof a === "number") {
// 			data[i] = data[i] * 2;
// 		} else {
// 			data[i] = data[i] + " - done";
// 		}
// 	}
// 	console.log(data);
// 	return data;
// }
// secondTask()

// function thirdTask() {
// 	const data = [5, 10, 'Shopping', 20, 'Homework'];
// 	const result = [];

// 	for (let i = 0; i < data.length; i++) {

// 		result[i] = data[data.length - 1 - i];
// 	}
// 	console.log(result);
// 	return result;
// }
// thirdTask()

// Coding Exercise 5:



let star = "";
const length = 5;

for (let i = 0; i <= length; i++) {
	for (let j = 0; j < length - i; j++) {
		star += " ";
	}
	for (let j = 0; j < 2 * i + 1; j++) {
		star += "*";
	}
	star += "\n";

}
console.log(star);