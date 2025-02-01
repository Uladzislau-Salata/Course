'use strict';

//filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(function (name) {
// 	return name.length < 5;
// })

// console.log(shortNames);

//map

// const answers = ['IvAn', 'AnnA', 'Hello'];

// const result = answers.map(item => item.toLowerCase());
// console.log(result);

//every/some

// const some = [4, 8, 1];

// console.log(some.some(item => typeof (item) === 'number'));
// console.log(some.every(item => typeof (item) === 'number'));

//reduce


// const arr = [3, 4, 5, 6, 6];
// const result = arr.reduce((sum, current) => sum + current, 3);
// console.log(result);

// const arr = ['apple', 'pear', 'plum'];
// const result = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(result);

const obj = {
	ivan: 'person',
	ann: 'person',
	dog: 'animal',
	cat: 'animal',
}

const newArr = Object.entries(obj)
	.filter(item => item[1] === 'person')
	.map(item => item[0]);

console.log(newArr);
