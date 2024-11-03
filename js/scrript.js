"use strict";

// Задание 1
function sayHello(name) {
	return `Привет, ${name}`;
}
sayHello('alex');

// Задание 2
function returnNeighboringNumbers(number) {
	return [number - 1, number, number + 1];
}
returnNeighboringNumbers(5)

// Задание 3

function getMathResult(a, b) {
	if (b >= 1) {
		let result = '';
		for (let i = 1; i <= b; i++) {
			if (i === b) {
				result += `${a * i}`
				break
			}
			result += `${a * i}---`
		}
		return result;
	} else {
		return a;
	}
}
console.log(getMathResult(10, 5));