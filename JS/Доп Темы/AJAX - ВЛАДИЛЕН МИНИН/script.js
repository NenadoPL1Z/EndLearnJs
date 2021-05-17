'use strict';

const requestURL = 'https://jsonplaceholder.typicode.com/users'; // будет делать запросы по данному URL;

const xhr = new XMLHttpRequest();


xhr.open("GET", requestURL); // получаем данные с requestURL;
xhr.addEventListener('load', () => {
    if (xhr.status >= 400) {
        console.log(xhr.status)
    } else {
        console.log(JSON.parse(xhr.response))
    }
})

xhr.addEventListener("error", () => { // вызывается если будет ошибка
    console.log(xhr.response)
})

xhr.send();
