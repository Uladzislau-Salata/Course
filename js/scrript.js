"use strict";

const options = {
	name: "test",
	width: 1024,
	height: 1024,
	colors: {
		border: "black",
		bg: 'red'
	},
	makeTest: function () {
		console.log("Test");
	}
};
options.makeTest();

console.log(Object.keys(options).length);

// console.log(options['colors']['border']);
// let counter = 0;
// for (let key in options) {
// 	if (typeof (options[key]) === 'object') {
// 		for (let i in options[key]) {
// 			console.log(`Свойства ${i} имеет значание ${options[key][i]}`);
// 		}
// 	} else {
// 		console.log(`Свойства ${key} имеет значание ${options[key]}`);
// 		counter++;
// 	}
// }
// console.log(counter);
