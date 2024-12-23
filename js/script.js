'use strict';

// function func() {
// 	window.smth = 'string';
// }

// const someRes = getData();
// const node = document.querySelector('.class');
// setInterval(function () {
// 	if (node) {
// 		node.innerHTML = someRes;
// 	}
// }, 1000);

// function outer() {
// 	const potentiallHugeArray = [];
// 	return function inner() {
// 		potentiallHugeArray.push('Hello');
// 		console.log('Hello!!!!');
// 	}
// }
// const sayHello = outer();

function createElement() {
	const div = document.createElement('div');
	div.id = 'test';
	document.body.append(testDiv);
	// return div;
}

createElement();
// const testDiv = createElement();



function deleteElem() {
	document.body.removeChild(document.getElementById('test'));
}

deleteElem();

