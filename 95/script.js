'use strict';

// new RegExp('pattern', 'flags');
// /pattern/f;

// const ans = prompt('Введите ваше число');

// const reg = /\d/g;

// console.log(reg.test(ans));
// console.log(ans.match(reg));

const str = 'My name is R2D2';

// console.log(str.match(/\w\d\w\d/i));
console.log(str.match(/\D/ig));

//  \D ищем не цифры
//  \W ищем не слова

// \d ищем цифры
// \w ищем слова
// \s ищем пробелы



// i Найти что-то вне зависимости от регистра
// g Пытаемся найти сразу несколько вхождений
// m Включает многострочный режим



// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Password');

// console.log(pass.replace(/\./g, "*"));

// console.log('12-34-56'.replace(/-/g, ':'));


