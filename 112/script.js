'use strict';

// const btnPhone = document.querySelector('#iphone'),
//     btnMacbook = document.querySelector('#macbook'),
//     images = document.querySelectorAll('img');


// let phoneAnimation;

// btnPhone.addEventListener('click', () => {
//     if (!phoneAnimation) {
//         phoneAnimation = images[0].animate([
//             {
//                 transform: 'translateY(0) rotate(0deg)',
//                 filter: 'opacity(100%)'
//             },
//             {
//                 transform: 'translateY(100px) rotate(180deg)',
//                 filter: 'opacity(50%)'
//             },
//             {
//                 transform: 'translateY(-100px) rotate(270deg)',
//                 filter: 'opacity(75%)'
//             },
//             {
//                 transform: 'translateY(0) rotate(360deg)',
//                 filter: 'opacity(100%)'
//             },
//         ], {
//             duration: 3000,
//             iterations: Infinity
//         });
//     } else if (phoneAnimation.playState == 'paused') {
//         phoneAnimation.play();
//     } else {
//         phoneAnimation.pause();
//     }
// });


const add1 = function (a) { return a + 1 };
const addAll3 = function (a, b, c) { return a + b + c };

const compose = (...fns) => (x) => fns.reduceRight((res, fn) => fn(res), x);

const composeWithArgs = (...fns) => (...arg) => fns.reduceRight((res, fn) => Array.isArray(res) ? fn(...res) : fn(res), arg);

console.log(composeWithArgs(add1, addAll3)(1, 2, 3));
