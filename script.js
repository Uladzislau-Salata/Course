'use strict';



function isPangram(string) {
	const abc = "abcdefghijklmnopqrstuvwxyz";
	let newabc = '';
	for (let i = 0; i < abc.length; i++) {
		if (string.toLowerCase().includes(abc[i])) {
			newabc += abc.slice(i, i + 1);
		}
	}
	return abc === newabc ? true : false;
}
isPangram('The quick brown fox jumps over the lazy dog');


// Вариант, когда строка переводится в нижний регистр до всех операций только 1 раз
// Это должно экономить ресурсы компьютера
function isPangram(string) {
	string = string.toLowerCase();
	return "abcdefghijklmnopqrstuvwxyz".split("").every(function (x) {
		return string.indexOf(x) !== -1;
	});
}

// С другим методом и строка каждый раз преобразовывается в коллбэке
function isPangram(string) {
	return 'abcdefghijklmnopqrstuvwxyz'
		.split('')
		.every((x) => string.toLowerCase().includes(x));
}

// При помощи цикла
function isPangram(str) {
	letters: for (var c = 0; c < 26; c++) {
		for (let i = 0; i < str.length; i++) {
			let s = str.charCodeAt(i)
			if (s < 65 || s > 90 && s < 97 || s > 122) continue
			if (s === 65 + c || s === 97 + c) continue letters
		}

		return false
	}

	return true
}

// При помощи Set
function isPangram(string) {
	return new Set(string.toLocaleLowerCase().replace(/[^a-z]/gi, '').split('')).size === 26;
}

// С использованием регулярных выражений
function isPangram(string) {
	return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}
