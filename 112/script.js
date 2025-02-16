'use strict';

import { replace } from "core-js/fn/symbol";
import { tns } from "./node_modules/tiny-slider/src/tiny-slider";

tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    autoplay: true
});

const promisify = (item, delay) =>
    new Promise(resolve => setTimeout(() => resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

async function one() {
    const promises = [a(), b(), c()];
    const [outpu1, outpu2, outpu3] = await Promise.all(promises);
    return `one is done: ${outpu1} ${outpu2} ${outpu3}`;
}

async function two() {
    const promises = [a(), b(), c()];
    const outpu1 = await Promise.race(promises);
    return `two is done: ${outpu1}`;
}

async function three() {
    const outpu1 = await a();
    const outpu2 = await b();
    const outpu3 = await c();
    return `three is done: ${outpu1} ${outpu2} ${outpu3}`
}

one().then(console.log);
two().then(console.log);
three().then(console.log);




// const msg = 'My number +12345678, name: Oleg';

function transformMsg(str) {

    let a = str.replace(/\+\d{8}/, "*****");
    let b = a.replace(/\w{4}:\s\w{1,}/, "hidden");

    // let b = str.slice(10, 19).replace('+1234568', '*****');
    // b += str.slice(-4).replace('Oleg', 'hidden');

    return b;
}

console.log(transformMsg(msg))



async function makeRequest() {
    return await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(json => console.log(json))
}

makeRequest()




const msg = 'Заявка №231';

const div = document.createElement('div');
div.style.background = 'red';
div.setAttribute('data-msg', true);
div.textContent(msg);

document.body.append(div);

a = [1, 2, 3]; b = [1, 2, 3];

console.log(a == b ? true : false);



function setOptions(height, width, ...additional) {
    console.log(height, width, ...additional)
}
console.log(setOptions(400, 500, 'red', 'top'));




const arr = [
    {
        name: 'Alex',
        salary: 500
    },
    {
        name: 'Ann',
        salary: 1500
    },
    {
        name: 'John',
        salary: 2500
    },
];

const result = arr.map(item => Object.entries(item)[1][1]).reduce((sum, curr) => sum + curr)
console.log(result)




if (0) {
    console.log('first')
} else if (NaN) {
    console.log('second');
} else if (' ') {
    console.log('third');
} else if (null) {
    console.log('fourth');
}