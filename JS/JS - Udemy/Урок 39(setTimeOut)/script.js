// ? Теория
/**
const timerId = setTimeout(function() {
    console.log("Hello")
}, 2000); // первый аргумент функция, 2 задержка в мили секундах

const timerIdAlternative = setTimeout(function(text) {
    console.log(text)
}, 5000, "3 аргумент это будет == text");

function logger() {
    console.log("text");
}

setTimeout(logger, 2000); // работает без переменной;

clearInterval(timerId); // очищаем запрост setTimeout для timerId, тоесть он не будет выведен
*/
// ! Практика

/**
const btn = document.querySelector(".btn");
let timerId;
let x = 0;
btn.addEventListener('click', () => {
    // const timerId = setTimeout(logger, 2000);
    timerId = setInterval(logger, 500); //бесконечный интервал в 2 секунды
});

function logger() {
    if (x === 3) {
        clearInterval(timerId);
    }
    console.log("text");
    x++;
}

let id = setTimeout(function log() { // рекурсивный подход для сложных скриптов
    console.log("Hello");
    id = setTimeout(log, 500);
}, 500);
*/

// ! Анимация Квадрата
const btn = document.querySelector(".btn");

btn.addEventListener('click', myAnimation);

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}