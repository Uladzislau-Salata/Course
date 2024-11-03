"use strict";

let num = 20;
function showFirstMessage(text) {
	console.log(text);
	num = 10;
	console.log(num);
}

showFirstMessage("hello world");
console.log(num);

// function calc(a, b) {
// 	return (a + b);
// }
// console.log(calc(4, 3));
// console.log(calc(5, 6));

function ret() {
	let num = 50;
	return num;
}
const anotherNum = ret();
console.log(anotherNum);

const logger = function () {
	console.log('hello world');
};
logger();


const calc = (a, b) => { return a + b };