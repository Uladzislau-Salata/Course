const numderOfFilms = +prompt("Сколько фильмов вы посмотрели", "0");
console.log(numderOfFilms);

const personalMovieDB = {
	count: numderOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

console.log(personalMovieDB);

const newOfFilms = prompt("Один из последних просмотренных фильмов", "");
const scoreOfFilms = +prompt("На сколько оцените его", "10");


personalMovieDB.movies[newOfFilms] = scoreOfFilms;
console.log(personalMovieDB);