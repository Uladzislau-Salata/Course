const numderOfFilms = +prompt("Сколько фильмов вы посмотрели", "0");
const personalMovieDB = {
	count: numderOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};
// const a = prompt('Один из последних посмотренных фильмов?', ''),
// 	b = prompt('На сколько оцените его?', ''),
// 	c = prompt('Один из последних посмотренных фильмов?', ''),
// 	d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

for (let i = 0; i < 1; i++) {
	const a = prompt('Один из последних посмотренных фильмов?', ''),
		b = prompt('На сколько оцените его?', '');
	if ((a || b) === null || (a.length || b.length) === 0 || a.length >= 50) {
		i = i - 1;
	} else {
		personalMovieDB.movies[a] = b;
	}

	//  ||

	// && a || b === undefined && a.length || b.length >= 50
	// console.log(typeof (a));
	// console.log(a.length);

	// console.log(a);


}

if (personalMovieDB.count < 10) {
	console.log("Посмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
	console.log("Вы киноман");
} else {
	console.log("Произошла ошибка");
}



console.log(personalMovieDB);
