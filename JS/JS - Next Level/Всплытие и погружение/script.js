"use strict";

//? Читаешь - всё понимаешь
// https://learn.javascript.ru/bubbling-and-capturing

let divOne = document.querySelector(".one");
let divTwo = document.querySelector(".two");
let divTree = document.querySelector(".tree");

//? Наглядный пример всплытия!

// divOne.addEventListener("click", (e) => {
//   e.stopPropagation(); //? Остонавливает всплытие
//   console.log("Hello 1");
// });

// divTwo.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("Hello 2");
// });

// divTree.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("Hello 3");
// });

//? Погружение - цель - всплытие

document.body.addEventListener(
  "click",
  () => {
    console.log("Hello Body");
  },
  { capture: true }
);

divOne.addEventListener(
  "click",
  (e) => {
    console.log("Hello 1");
  },
  { capture: true }
);

divTwo.addEventListener(
  "click",
  (e) => {
    console.log("Hello 2");
  },
  { capture: true }
);

divTree.addEventListener(
  "click",
  (e) => {
    console.log("Hello 3");
  },
  { capture: true }
);
