"use strict";

const shoppingMallData = {
	shops: [
		{
			width: 10,
			length: 5
		},
		{
			width: 15,
			length: 7
		},
		{
			width: 20,
			length: 5
		},
		{
			width: 8,
			length: 10
		}
	],
	height: 5,
	moneyPer1m3: 30,
	budget: 50000
}

function isBudgetEnough(shop) {
	let storeArea = 0;
	let storeVolume = 0;
	let storуHeating = 0;

	for (const element of shop.shops) {
		for (const key in element) {
			storeArea += element.width * element.length;
		}
	}

	storeVolume = storeArea * shop.height;
	storуHeating = storeVolume * shop.moneyPer1m3;


	if (shop.budget - storуHeating >= 0) {
		return console.log("Бюджета достаточно");
	} else {
		return console.log("Бюджета недостаточно");
	}
}

isBudgetEnough(shoppingMallData);
