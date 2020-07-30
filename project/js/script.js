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
        "Ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
let add = document.querySelector(".promo__adv");
console.log(add);
// add.remove();
let addOne = add.querySelectorAll("img");
console.log(addOne);
addOne[0].remove();
// addOne.pop();

let name = document.querySelector(".promo__genre").textContent = "драма";

let hhh=document.querySelector(".promo__bg").style.backgroundImage="url('img/bg.jpg')";

// for (let key in movieDB.movies) {
//     // console.log(movieDB.movies[key]);
// }
let list = document.querySelector(".promo__interactive-list");
console.log(list);
list.innerHTML =  "";
movieDB.movies[5] = "ggggggggggg";
movieDB.movies.forEach((e, i)  => {
    list.innerHTML += `<li class="promo__interactive-item">${i + 1}:${e}<div class="delete"></div></li>`;
});




