'use strict';

const funds = [
	{ amount: -1400 },
	{ amount: 2400 },
	{ amount: -1000 },
	{ amount: 500 },
	{ amount: 10400 },
	{ amount: -11400 }
];

function getPositiveIncomeAmount(arr) {

	return arr.filter(item => item.amount >= 0)
		.map(item => item.amount)
		.reduce((summ, current) => summ + current)

}

getPositiveIncomeAmount(funds);

function getTotalIncomeAmount(arr) {
	function summArr(arr) {
		return arr
			.map(item => item.amount)
			.reduce((summ, current) => summ + current)
	}

	return arr.some(item => item.amount < 0) ? summArr(arr) : getPositiveIncomeAmount(arr)


}

getTotalIncomeAmount(funds)