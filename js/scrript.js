"use strict";

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
	if (arr.length === 0) {
		return console.log("Семья пуста");
	}
	let str = "";
	for (let elem of arr) {
		str += " " + elem;
	}

	return console.log(`Семья состоит из:${str}`)
}

showFamily(family);

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {

	arr.forEach(function (elem) {
		console.log(elem.toLowerCase());
	});

}
standardizeStrings(favoriteCities)