"use strict";

const someString = 'This is some strange string';

function reverse(str) {

	if (str.length == 0) {
		return console.log("Ошибка")
	}
	const arrStringReverse = str.split('').reverse();
	let readyString = '';


	for (let elem of arrStringReverse) {
		readyString += elem;
	}

	return console.log(readyString);
}
reverse(someString);


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arrCurrencies, overCurrencies) {
	if (arrCurrencies.length == 0) {
		return console.log("Нет доступных валют");
	}

	let str = `Доступные валюты:\n`;
	let arrAvailableCurrencies = arrCurrencies.filter(function (elem) {
		if (elem === overCurrencies) {
			return false;
		} else {
			str += `${elem}\n`;
			return true;
		}
	})
	return console.log(str);
}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');