
const factorial = (n) => {

	if (n === 0) {
		return 1;
	}
	return n * factorial(n - 1);

}

const answer = factorial(4);

console.log(answer);

// function factorial(n) {
// 	if (typeof (n) !== 'number' || !Number.isInteger(n)) {
// 		return "Ошибка, проверьте данные";
// 	}

// 	if (n >= 1) {
// 		return n * factorial(n - 1);
// 	} else {
// 		return 1;
// 	}

// 	// Более короткий вариант, который вы можете встретить
// 	// Но не учитывает отрицательные значения
// 	// return n ? n * factorial(n - 1) : 1;
// }

// factorial(5)