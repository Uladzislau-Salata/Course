"use strict";
// Место для первой функции
function getTimeFromMinutes(minutes) {
	if (typeof (minutes) !== 'number' || !Number.isInteger(minutes) || minutes < 0) {
		return "Ошибка, проверьте данные"
	}

	const hours = Math.floor(minutes / 60);
	const minut = minutes % 60;

	let hoursStr = '';
	switch (hours) {
		case 0:
			hoursStr = 'часов'
			break;
		case 1:
			hoursStr = 'час'
			break;
		case 2:
			hoursStr = 'часа'
			break;
		case 3:
			hoursStr = 'часа'
			break;
		case 4:
			hoursStr = 'часа'
			break;

		default:
			hoursStr = 'часов'
			break;
	}
	return `Это ${hours} ${hoursStr} и ${minut} минут`
}

getTimeFromMinutes(150);
getTimeFromMinutes(50);
getTimeFromMinutes(0);
getTimeFromMinutes(-150);



function findMaxNumber(n1, n2, n3, n4) {
	if (typeof (n1) !== 'number' || typeof (n2) !== 'number' || typeof (n3) !== 'number' || typeof (n4) !== 'number' || n1 === "undefined" || n2 === "undefined" || n3 === "undefined" || n4 === "undefined") {
		return console.log(0);
	}
	return console.log(Math.max(n1, n2, n3, n4));

}

findMaxNumber(8, 9, 5, 55);