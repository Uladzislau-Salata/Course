"use strict";
// Место для первой функции
// function calculateVolumeAndArea(numder) {
// 	if (typeof (numder) != 'string' && numder > 0 && (numder + '').indexOf('.') === -1) {
// 		console.log(`Объём куба:${numder * numder * numder}, площадь всей поверхности:${numder * numder * 6}`);
// 	} else {
// 		console.log("При вычислении произошла ошибка");
// 	}
// }


function calculateVolumeAndArea(length) {
	if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
		return console.log("При вычислении произошла ошибка");
	}

	let volume = 0,
		area = 0;

	volume = length * length * length;
	// length ** 3 - это тоже самое, что и выше или варианты через цикл.
	// ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
	area = 6 * (length * length);

	console.log(`Объем куба: ${volume}, площадь всей поверхности: ${area}`);
}

calculateVolumeAndArea(5);
calculateVolumeAndArea(15);
calculateVolumeAndArea(15.5);
calculateVolumeAndArea('15');
calculateVolumeAndArea(-15);




// Место для второй функции
function getCoupeNumber(seatNumber) {
	if (!Number.isInteger(seatNumber) || seatNumber < 0) {
		return console.log("Ошибка. Проверьте правильность введенного номера места");
	} else if (seatNumber === 0 || seatNumber > 36) {
		return console.log("Таких мест в вагоне не существует");
	} else {
		if (seatNumber % 4 === 0) {
			return console.log(Math.floor(seatNumber / 4 - 1) + 1);
		}
		return console.log(Math.floor(seatNumber / 4) + 1);
	}
}

function getCoupeNumber(seatNumber) {
	if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
		return "Ошибка. Проверьте правильность введенного номера места";
	}

	if (seatNumber === 0 || seatNumber > 36) {
		return "Таких мест в вагоне не существует";
	}

	return Math.ceil(seatNumber / 4);
	// тут очень много вариантов решения, но выбрал один из элегантных :)
}

getCoupeNumber(33);
getCoupeNumber(7);
getCoupeNumber(300);
getCoupeNumber(0);
getCoupeNumber(7.7);
getCoupeNumber(-10);
getCoupeNumber('Hello');
