'use strict';

// const num = new Number(3);
// console.log(num);

function User(name, id) {
	this.name = name;
	this.id = id;
	this.human = true;
	this.hello = function () {
		console.log(`Hello ${this.name}`);
	}
}

User.prototype.exit = function (name) {
	console.log(`Пользователь ${this.name} ушёл`);
}

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.exit();

console.log(ivan);
console.log(alex);

ivan.hello();
alex.hello();

// const box = document.querySelector('.box');

// let observer = new MutationObserver(mutationRecords => {

// 	console.log(mutationRecords);

// });

// observer.observe(box, {
// 	childList: true
// })

// observer.disconnect();

