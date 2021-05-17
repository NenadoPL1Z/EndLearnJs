'use strict';

const box = document.getElementById("box"); // получаем элемент по id
const btns = document.getElementsByTagName('button') // получаем элементы с тегом button, если их много то будет псевдомассив
const circles = document.getElementsByClassName('circle'); // ищем по имени
const hearts = document.querySelectorAll(".heart"); // уникаальный псевдомассив у которого есть forEach
hearts.forEach( item => console.log(item));
const oneHeart = document.querySelector('.heart') // записывет первый элемент с этим значение
console.log(oneHeart)

box.style.cssText = "background-color: blue; width: 500px" // указывать стили для элемента

box.style.backgroundColor = "blue"; // указываем задний фон
box.style.width = 500 + "px";
box.style.afte
btns[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = "red";

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = "blue";
// }

hearts.forEach((item) => item.style.backgroundColor = "blue");

let div = document.createElement('div'); // создаём элемент
let text = document.createTextNode('Тут был я');

// ? Важная часть

div.classList.add('black'); // добовляем класс элементу

let wrapper = document.querySelector('.wrapper');

wrapper.append(div); //append встовляем в конец родителя
// wrapper.prepend(div);

// wrapper.appendChild(div);
// wrapper.insertBefore(div, hearts[0]) // вспвляем перед элементом

// hearts[0].before(div) // вставить после элемента

// circles[0].remove(); // удаляем элемент;

// hearts[0].replaceWith(circles[0]); // заменить элемент

div.innerHTML = '<h1>Hello World</h1>'; // пишем текст и html код в div;

// div.textContent = "Hello" // пишем толкько текст в div

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>') // beforebegin вставлеяем перед нашим блоком;
// afterend - вставляет после нашего блока;
// afterbegin - вставляем перед нашим элементом
// beforeend - вствить после нашего элемента