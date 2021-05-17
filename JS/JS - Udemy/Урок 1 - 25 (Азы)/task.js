// ! Задачи 12, 15, 18.....
'use strict';

// start()

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function() {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while(this.count == "" || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 3; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                this.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevle: function() {
        if (this.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (this.count >= 10 && this.count < 30) {
            console.log("Вы классический зритель");
        } else if (this.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function () {
        if (!this.privat) console.log(personalMovieDB)
    },
    writeYourGenres: function() {
        for (let x = 1; x <= 3; x++) {
            let genreFilm = prompt(`Ваш либивый жанр под номером ${x}`, "Боевик")
            if (genreFilm == "" || genreFilm == null) {
                x--;
                continue
            }
            this.genres.push(genreFilm);
        }
        this.genres.forEach((item, index) => console.log(`Любимый жанр ${index + 1}: ${item}`));
        
    },
    toggleVisibleMyDB() {
        if (this.privat == false) {
            this.privat = true;
        } else if (this.privat == true) {
            this.privat = false
        }
    }
};


//! Задача 27 

// let x = 5; 
// console.log(x++);

// console.log([] + false - null + true) // пустой массив равен пустой строке  [] == ""

// let y = 1;
// x = y = 2; // процедурное присваивание идёт справа на лево
// console.log(x)

// console.log([] + 1 + 2)

// console.log("1"[0]);

// console.log(2 && 1 && null && 0 && undefined) // возврощает первую ложь, если всё правда позврощает последний элемент

// console.log(!!(1 && 2) == (1 && 2));

// console.log(null || 2 && 3 || 4 ) // || возворащает первую правду 

// let arr_a = [1, 2, 3];
// let arr_b = [1, 2, 3];
// console.log(arr_a == arr_b)

// console.log("Ёжик" > "яблоко");