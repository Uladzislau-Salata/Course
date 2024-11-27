"use strict";

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function () {
		personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
		while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
		}
	},
	rememberMyFilms: function () {
		for (let i = 0; i < 2; i++) {
			const a = prompt("Один из последних просмотренных фильмов?", ''),
				b = prompt("На сколько оцените его?", '');
			if (a != null && b != null && a != '' && b != '' && a.length < 50) {
				personalMovieDB.movies[a] = b;
				console.log('done');
			} else {
				console.log('error');
				i--;
			}
		}
	},
	detectPersonalLevel: function () {
		if (personalMovieDB.count < 10) {
			console.log("Просмотрено довольно мало фильмов");
		} else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
			console.log("Просмотрено довольно мало фильмов");
		} else if (personalMovieDB.count > 30) {
			console.log("Вы киноман");
		} else {
			console.log("Произошла ошибка");
		}
	},
	showMyDB: function () {
		if (personalMovieDB.privat != true) {
			console.log(personalMovieDB);
		}
	},
	writeYourGenres: function () {
		for (let i = 1; i <= 3; i++) {

			let genre = prompt(`Ваш любимый жанр под номером ${i}`);

			if (genre === "" || genre === null) {
				console.log("Вы ввели не корректные данные или не ввели вовсе");
				i--;
			} else {
				personalMovieDB.genres[i - 1] = genre;
			}
		}
		// console.log(personalMovieDB);
		personalMovieDB.genres.forEach((elem, index) => {
			console.log(`Либимый жанр #${index + 1}- это ${elem}`)
		})
	},
	toggleVisbleMyDB: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	}
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisbleMyDB();
// console.log(personalMovieDB.privat);
