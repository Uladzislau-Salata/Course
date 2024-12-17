'use strict';

// function amountOfPages(summary) {
// 	let num = 0;

// 	for (let i = 1; i <= summary; i++) {

// 		if (i < 10) {
// 			num += String(i).length;
// 		} else {
// 			num += String(i).length;
// 			if (num === summary) {
// 				num = i;
// 				break
// 			}
// 		}

// 	}
// 	return num;
// }



// amountOfPages(5);
// amountOfPages(25);
// amountOfPages(1095);
// amountOfPages(185);


function amountOfPages(summary) {
	let result = '';
	let n = 0;

	for (let i = 1; i <= summary; i++) {
		result += i;
		if (result.length === summary) {
			n = i;
			break;
		}
	}

	return n;
}