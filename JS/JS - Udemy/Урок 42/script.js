'use strict';

const box = document.querySelector(".box"),
      btn = document.querySelector('button');

let width = box.clientWidth; // получаем ширину блока, без учёта скрола если он есть;
let height = box.clientHeight;
// получаем длинну блока, оносительно скролла;
console.log(width, height);

width = box.offsetWidth; // получаем полную ширину блока с учётом скрола
height = box.offsetHeight; // получаем полную динну блока (выходим за линну скрола)

console.log(width, height)

const scrollWidth = box.scrollWidth;
// получаем ширину блока, без учёта скролла
const scrollHeight = box.scrollHeight;
// получаем длинну всего блока, закрытего в скролле;

console.log(scrollWidth, scrollHeight)

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + "px";
    console.log(box.scrollTop)
})

console.log(box.getBoundingClientRect()); // растоятение от левого верхнего угла до элемента;

let style = window.getComputedStyle(box);
// полуаем все применённые стили к данному элементу
console.log(style);
console.log(style.display); // получаем свойство блока

if (style.display == "block") {
    document.body.style.backgroundColor = "rgba(210, 150, 240, .4)"
} 

console.log(document.documentElement.scrollTop)

window.scrollBy(0, 1400) // перемещаемся относительно элемента

window.scrollTo(0, 400) // премещаемся относительно страницы



