'use strict';

// function showThis() {
// 	console.log(this);
// }
// showThis();//1)


// function showThis(a, b) {
// 	console.log(this);
// 	function sum() {
// 		console.log(this);
// 		return a + b;
// 	}

// 	console.log(sum());
// }
// showThis(4, 5);

//1) обычная функиция: this= window, но если use strict - undefined

// const obj = {
// 	a: 20,
// 	b: 15,
// 	sum: function () {
// 		function shout() {
// 			console.log(this);
// 		}
// 		shout();
// 	}
// }
// obj.sum();//2)

//2) Контекстно у метода объекта - сам объект

// function User(name, id) {
// 	this.name = name;
// 	this.id = id;
// 	this.human = human;
// 	this.hello = function () {
// 		console.log('Hello! ' + this.name);
// 	};
// }

// let ivan = new User('Ivan', 23);//3)

//3) this в конструкторе и классах - это новый экземпляр объекта


// function sayName(surname) {
// 	console.log(this);
// 	console.log(this.name + surname);

// }

// const user = {
// 	name: 'John'
// }

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
// 	return this * num;
// }

// const double = count.bind(2);

// console.log(double(3));
// console.log(double(13));//3

//3) Ручная привязка this: call, apply, blind

const btn = document.querySelector('button');
btn.addEventListener('click', function () {
	console.log(this);
	this.style.backgroundColor = 'red';
});

const obj = {
	num: 5,
	sayNumber: function () {
		const say = () => {
			console.log(this.num);
		};
		say();
	}
};

obj.sayNumber();

const double = a => a * 2;

console.log(double(4));


