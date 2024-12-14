'use strict';

const user = {
	name: 'Alex',
	surName: 'Smith',
	birthday: '20/04/2021',
	showMyPublicData: function () {
		console.log(`${this.name} ${this.surName}`);
	}
}
const userMap = new Map(Object.entries(user));
// console.log(userMap);

const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);


const shops = [
	{ rice: 500 },
	{ oil: 200 },
	{ bread: 50 }
];
const butget = [5000, 15000, 25000];

const map = new Map([
	[{ paper: 400 }, 8000]
]);
shops.forEach((shop, i) => {
	map.set(shop, butget[i]);
});

console.log(map);
// console.log(map.get(shops[0]));
// console.log(map.has(shops[0]));
// map.delete(key);
// map.clear();
// map.size();
// map.keys();
// console.log(map.keys());

// const goods = [];

// for (let shop of map.keys()) {
// 	goods.push(Object.keys(shop)[0]);
// }
// console.log(goods);

// for (let price of map.values()) {
// 	console.log(price);
// }

// for (let [shop, price] of map.entries()) {
// 	console.log(price, shop);
// }

// map.forEach((value, key, map) => {
// 	console.log(value, key);
// })


