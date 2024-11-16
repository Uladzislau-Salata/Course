"use strict";
// Место для первой функции
function fib(num) {
	if (typeof (num) !== 'number' || !Number.isInteger(num) || num <= 0) {
		return "";
	}

	let result = '';
	let first = 0;
	let second = 1;

	if (num === 1) {
		return result + `${first}`;
	}
	if (num === 2) {
		return result + `${first}` + ` ${second}`;
	}

	result = (`${first}` + ` ${second}`);

	for (let i = 2; i < num; i++) {
		let lastSum = first + second;

		result += ` ${lastSum}`;

		first = second;
		second = lastSum;
	}
	return result;
}

fib(4);
//  => ''0 1 1 2"

fib(7);
//  => ''0 1 1 2 3 5 8"

fib('7');
//  => ''"

fib(1);
//  => "0"

fib(0);
// => ''"