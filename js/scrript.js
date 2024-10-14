let star = "";
const length = 7;
for (let i = 0; i < length; i++) {
	for (let j = 0; j < i; j++) {
		star += "*";
	}
	star += "\n";
}
console.log(star);


