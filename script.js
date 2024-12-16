'use strict';

// const bigint = 126315465498498421316465494n;

const sameBigint = BigInt(126315465498498421316465494);

// console.log(typeof (bigint));
// console.log(5n + 8);
// console.log(Math.round(5n));
// console.log(5n / 2n);
// console.log(5n == 5);


let bigint = 1n;
let number = 2;

console.log(bigint + BigInt(number));
console.log(Number(bigint) + number);
// console.log(+bigint + number);


