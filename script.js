'use strict';

// let id = Symbol('id');

// const obj = {
// 	name: 'Test',
// 	[Symbol('id')]: 1,
// 	getId: function () {
// 		return this[id];
// 	}
// }


// // // console.log(id == id2);

// // obj[id] = 1;

// // console.log(obj.getId());
// console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);

// // for (let value in obj) {
// // 	console.log(value);
// // }



const myAwesomeDB = {
	movies: [],
	actors: [],
	[Symbol.for('id')]: 123
}

//  Сторонний код библеотеки

myAwesomeDB.id = "324234234";

console.log(myAwesomeDB[Symbol.for("id")]);
console.log(myAwesomeDB);