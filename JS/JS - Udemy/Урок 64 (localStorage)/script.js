'use strict';

// !localStorage - маленькая бааза данных (5 мб), которая сохраняет действия пользователя после перезапуска страницы!

//* LocalStorage нужен только для одного — хранить определенные данные между сессиями пользователя. Можно придумать тысячу и одну вещь, которую можно хранить в локальном хранилище браузера. Например, браузерные игры, которые используют его как сохраненку, или записать момент, на котором пользователь остановился при просмотре видео, различные данные для форм и т.д.

// //? добовляем в localStorage => key с именем = number, value = 5;
// //? если key с именем number уже существует, то значение перезапишеться;
//? Когда мы добовляем их, то они будут существовать даже если убрать их добовление в коде через name.setItem, чтобы полностью их удалить из localStorage нам нужно очистить их выборачно или массово специальными методами! 

// localStorage.setItem('number', 5)

// //? удаляем вырнанный key

// localStorage.removeItem('number')


// //? Полная очистка хранилища

// localStorage.clear()


// //? getItem => получаем key с именем number; 

// console.log(localStorage.getItem('number'));


//? Еще стоит сказать, что у браузера существует клон localStorage, который называется sessionStorage. Их разница только в том, что последний хранит данные только для одной вкладки (сессии) и просто очистит свое пространство как только мы закроем вкладку

// * Практика - видео

// const checkbox = document.querySelector('#checkbox'),
//       form = document.querySelector('form'),
//       change = document.querySelector('#color');

// if (localStorage.getItem("isChecked")) {
//     checkbox.checked = true;
// }

// if (localStorage.getItem('bg') === 'change') {
//     form.style.backgroundColor = "red"
// }

// checkbox.addEventListener('change', () => {
//     form.style.backgroundColor = "blue"
//     localStorage.setItem('isChecked', true);
// })

// change.addEventListener('click', () => {
//     if (localStorage.getItem('bg') === 'change') {
//         localStorage.removeItem('bg')
//         form.style.backgroundColor = "#fff"
//     } else {
//         localStorage.setItem('bg', 'change');
//         form.style.backgroundColor = "orange"
//     }
// })

// const persone = {
//     name: "Alex",
//     age: 25
// }

// const serializedPersone = JSON.stringify(persone)

// localStorage.setItem('alex', serializedPersone)


// * Практика - сам

if (localStorage.getItem('change') === "true") {
    document.body.style.backgroundColor = "green"
} 

const changeColor = document.querySelector('#color')

changeColor.addEventListener('click', () => {
    if (localStorage.getItem('change')) {
        localStorage.removeItem('change')
        document.body.style.backgroundColor = "blue"
    } else {
        localStorage.setItem('change', true)
        document.body.style.backgroundColor = "red"
    }
})

 
