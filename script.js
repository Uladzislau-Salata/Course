const btns = document.querySelectorAll("button"),
	overlay = document.querySelector('.overlay')

// btn.onclick = function () {
// 	alert('Click');
// }


// btn.addEventListener('click', () => {
// 	alert('Click');
// })

let i = 0;
const deleteElement = (e) => {
	console.log(e.currentTarget);
	console.log(e.type);
	// i++;
	// if (i == 1) {
	// 	btn.removeEventListener('click', deleteElement);
	// }
}


// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
	btn.addEventListener('click', deleteElement, { once: true });
})

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
	e.preventDefault();
	console.log(e.target);
});