const btns = document.querySelectorAll("button");
const overlay = document.querySelector('.overlay');
// btns.onclick = function() { // событие клика (неравильное)
//     console.log("Hello")
// }

// btns.addEventListener('click', () => { // правильное обрабатывние событий
//     console.log("Hello")
// });

// btns.addEventListener('mouseenter', (event) => { // правильное обрабатывние событий, event - является стандртным аатрибутом 
//     console.log(event.target)
//     event.target.remove();
//     console.log("Hello World")
// });
// let i = 0;
const deleteElement = (e) => {
    console.log(e.target); // turget - поведение всплытие событие своершается сначала на самом вложенном элементе а потом по иерархии вверх
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement)
    // }
};

// 
// btn.addEventListener('click', deleteElement); // добавили события клика который выполняет фунцкию deleteElement;
// btn.removeEventListener('click', deleteElement); // убрали событие клика
// overlay.addEventListener('click', deleteElement);

btns.forEach((item) => item.addEventListener('click', deleteElement, {once: true})) // передаём необязательный 3 парааметр

const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault(); // отменяем стандартное поведение чего либо
    console.log(event.target);
})