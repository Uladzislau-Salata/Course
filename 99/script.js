'use strict';

class User {
	constructor(name, age) {
		this.name = name;
		this._age = age;
	}
	#surname = 'Petrychenko';

	get surname() {
		return this.#surname;
	}
	set surname(value) {
		return this.#surname = value;
	}

	say = () => {
		console.log(`Имя пользователя:${this.name}${this.#surname}, возраст ${this._age}`);
	}

	get age() {
		return this._age;
	}

	set age(age) {
		if (typeof age === 'number' && age > 0 && age < 110) {
			this._age = age;
		} else {
			console.log('Недопустимое значение!');
		}
	}

};

const ivan = new User('Ivan', 27);

console.log(ivan.surname = 'Salata');
console.log(ivan.surname);

ivan.say();


