console.log(document.head); // обращаемся к head в html

console.log(document.documentElement); // обращаемся к тегу html в htmle

let chNod = document.body.childNodes
console.log(chNod); // получаем все узлы внутри родителя

console.log(document.body.firstElementChild); // получаем первый элемент внутри родителя
console.log(document.body.lastElementChild); // получаем последний элемент внутри родителя
console.log(document.querySelector("#current").parentNode.parentNode) // получаем родителя кнопки, потом родителя полученного элемента, parrentElement - получаем 100% елемент родителя

console.log(document.querySelector("[data-current='3']").nextElementSibling) // получаем дата атрибут. //? nextSibling получение следующего соседа от нашего элемента, previousSibling - предыдущи элемент (МОЖЕМ ПОЛУЧИТЬ #text);
// ! nextElementSibling получаем след элемент игнорирую ноду(#text)


for (let node of chNod) {
    if (node === "#text") {
        continue;
    }
    console.log(node)
}