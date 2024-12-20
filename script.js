'use strict';

function deepCount(arr) {
	let num = 0;
	for (const elem of arr) {
		if (Array.isArray(elem)) {
			num += 1;
			num += deepCount(elem);
		} else {
			num += 1;
		}
	}
	return num; debugger
}

// Вариант с циклом
function deepCount(a) {
	let count = a.length;
	for (let i = 0; i < a.length; i++) if (Array.isArray(a[i])) count += deepCount(a[i]);
	return count;
}

// Вариант с методом reduce
function deepCount(a) {
	return a.reduce((s, e) => s + (Array.isArray(e) ? deepCount(e) : 0), a.length);
}