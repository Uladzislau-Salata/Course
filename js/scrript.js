let star = "";
const length = 7;
for (let i = 0; i < length; i++) {
	for (let j = 0; j < i; j++) {
		star += "*";
	}
	star += "\n";
}
console.log(star);




function firstTask() {
	for (let i = 5; i < 11; i++) {
		console.log(i);
	}
}
firstTask()

function secondTask() {
	for (let i = 20; i > 9; i--) {
		if (i === 13) {
			break;
		}
		console.log(i);
	}
}
secondTask()


thirdTask
function thirdTask() {
	for (let i = 2; i < 11; i += 2) {

		console.log(i);
	}
}
thirdTask()