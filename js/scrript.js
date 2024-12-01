"use strict";

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', "Somebody"];

function sortStudentsByGroups(arr) {
	arr.sort();

	let a = [],
		b = [],
		c = [],
		rest = [];

	for (let i = 0; i < arr.length; i++) {
		if (i < 3) {
			a.push(arr[i]);
		} else if (i < 6) {
			b.push(arr[i]);
		} else if (i < 9) {
			c.push(arr[i]);
		} else {
			rest.push(arr[i]);
		}
	}
	return console.log([a, b, c, `Оставшиеся студенты: ${rest.length == 0 ? '-' : rest.join(", ")}`]);
}
sortStudentsByGroups(students);