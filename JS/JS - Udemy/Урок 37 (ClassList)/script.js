const btns = document.querySelectorAll("button"),
    wrapper = document.querySelector(".btn-block"); // получаем родителя кнопок

console.log(btns[0].classList.length); // получаем количество классов у элемента
console.log(btns[0].classList.item(1)); // получаем классы элемента под определённым индексмо начиная с 0 (class="blue some")
// console.log(btns[1].classList.add('red', 'black')) // добовляем класс элементу
console.log(btns[0].classList.remove("red")); // убираем класс у элемента
console.log(btns[0].classList.toggle("red")); // toggle - работает так, если на элементе есть данный клас то удаляет его, если нету то добовляет;
if (btns[1].classList.contains("red")) {
    // позволяет проверять есть ли данный класс на наше м элеменете, если да то true если нет то false
    console.log("red");
}

btns[0].addEventListener("click", () => {
    if (!btns[1].classList.contains("red")) {
        btns[1].classList.add("red");
    } else {
        btns[1].classList.remove("red");
    }

    // btns[1].classList.toggle("red") - адльтернатива
});

// console.log(btns[0].className)

// !Делегирование - назначение функции на его потомков с помощью родителя

// wrapper - родитель, внутри него есть его потомки с тегом button
wrapper.addEventListener("click", (event) => {
    // event.target.matches("button.red") - проверяет на своподение элемента по классу
    if (event.target && event.target.tagName == "BUTTON") {
        // проверяем является ли элемент кнопкой
        event.target.classList.toggle("red");
    }
    // if  (event.target && event.target.classList.contains("blue")) {
    //     console.log("Hello")
    // }
});

// КЛАСИЧЕКИЙ ПРИМЕР ОШИБКИ НЕ ИСПОЛЬЗОВАНИЯ ДЕЛЕГИРОВАНИЯ
// btns.forEach(btn => btn.addEventListener('click', () => {
//     console.log("Hello")
// }))

const btn = document.createElement("button");
btn.classList.add("red");
wrapper.append(btn);

// ! ДОП МАТЕРИАЛ - ДЕЛЕГИРОВАНИЕ СОБЫТИЙ
//? Идея в том, что если у нас есть много элементов, события на которых нужно обрабатывать похожим образом, то вместо того, чтобы назначать обработчик каждому, мы ставим один обработчик на их общего предка.
//Метод elem.closest(selector) возвращает ближайшего предка, соответствующего селектору. В данном случае нам нужен <td>, находящийся выше по дереву от исходного элемента.
