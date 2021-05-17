/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
    ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
            newFilm = `${newFilm.substring(0, 22)}...`;
            }
            
            if (favorite) {
                console.log("Добовляем любимый фильм")
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, movieList);
        }

        event.target.reset();

})


    const removeAdv = (arr) => {
        arr.forEach((item) => {
            item.remove()
        });
    };

    const makeChanges = () => {
        genre.textContent = 'драма';

        poster.style.backgroundImage = 'url("img/bg.jpg")';
    }


    const sortArr = (arr) => {
        arr.sort();
    }

        // !МОЁ НЕПОЛНОЕ РЕШЕНИЕ
//     let Form = document.querySelector(".adding__input");
//     let button = document.querySelector(".confirm");
//     let check = document.querySelector(".checkbox");
//     let basket = document.querySelectorAll('.delete');
//     let allElement = document.querySelectorAll(".promo__interactive-item");
//     console.log(allElement)

//     let addForm = document.querySelector(".promo__interactive-list");
//     let div = document.createElement('li');
//     div.classList.add("promo__interactive-item");

//     basket.forEach((item, index) => item.addEventListener('click', (even) => console.log(index)))

//     button.addEventListener('click', () => {
//         if (check.checked) console.log("Добавляем любимый фильм");
//         if (Form.value.length > 21) {
//             let transfomForm = Form.value.split('');
//             transfomForm.splice(20, transfomForm.length, "...")
//             movieDB.movies.push(transfomForm.join(""))
//             div.textContent = `${movieDB.movies.length}: ${movieDB.movies[movieDB.movies.length - 1]}`
//         } else {
//             movieDB.movies.push(Form.value);
//             div.textContent = `${movieDB.movies.length}: ${movieDB.movies[movieDB.movies.length - 1]}`
//         }
//         addForm.insertAdjacentHTML("beforeend", `<li class="promo__interactive-item">${movieDB.movies.length}: ${movieDB.movies[movieDB.movies.length - 1]} <div class="delete"></div></li>`);
//         basket = document.querySelectorAll('.delete')
//         console.log(basket)
//         movieDB.movies.sort();
//         for (let x = 0; x < movieDB.movies.length; x++) {
//             allElement[x].innerHTML = `${x + 1}: ${movieDB.movies[x]}`;
//         }
//     }


    //! Решение по видео

    function createMovieList(film, parent) { 
        parent.innerHTML = "";
        sortArr(movieDB.movies);
        film.forEach((item, index) => {
            parent.innerHTML += `<li class="promo__interactive-item">
            ${index + 1} ${item}
            <div class="delete"></div>
            </li>`; 
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(film, parent)
            })
        })
    }

    removeAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList)
})