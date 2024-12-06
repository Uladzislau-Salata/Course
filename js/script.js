/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
	movies: [
		"Логан",
		"Лига справедливости",
		"Ла-ла лэнд",
		"Одержимость",
		"Скотт Пилигрим против..."
	]
};


const promo = document.querySelectorAll('.promo__adv img');
// console.dir(promo);
promo.forEach(item => {
	item.remove();
})

const promoGenre = document.querySelectorAll('.promo__genre');
// console.dir(promoGenre[0].innerHTML);
promoGenre[0].textContent = 'Драма';

const promoBg = document.querySelector('.promo__bg');
promoBg.style.backgroundImage = "url('img/bg.jpg')";

movieDB.movies.sort();
// console.log(movieDB.movies);
const promoList = document.querySelectorAll(".promo__interactive-item ");
// console.dir(promoList);
for (let i = 0; i < promoList.length; i++) {
	promoList[i].innerHTML = `${i + 1}. ${movieDB.movies[i]}`;
}