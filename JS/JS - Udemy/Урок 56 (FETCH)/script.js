'use strict';
//! POST ЗАПРОС
// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify({name: "Alex"}),
//     headers: {
//         "Content-Type": "application/json"
//     }
// })
// .then(response => response.json()) //? response.text() // показывает текст запроса
// .then(json => console.log(json))


//! GET ЗАПРОС

fetch("https://jsonplaceholder.typicode.com/posts")
.then(data => data.json())
.then(data => console.log(data))
.catch(() => console.error("Ошибка"))

fetch("https://jsonplaceholder.typicode.com/posts")
.then(data => data.json())
.then(x => console.log(x))

