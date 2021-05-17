// DOM - JavaScript

//let HelloWorld = document.getElementById("Hello") // находим элемент - по id
//console.log(HelloWorld)
//console.log(HelloWorld.innerHTML) // возвращает содержимае элемента
//let newHelloWorld = "Hello Rodion"
//HelloWorld.innerHTML = newHelloWorld; // меняем содержимое элемента
//console.log(HelloWorld.innerHTML)


// jQuey


let helloWorld = "Hello Rodion";
$("#Hello").text(helloWorld); // То-же самое что и JS
console.log($("#Hello"))
$("body").append("<p>Hello World</p>"); // выбирем элемент body и говорим добавить в конец текст
$("h1").fadeOut(3000).fadeIn(5000);
 // fadeOut анимация по исчезнавению (3 секунды) // fadeIn - анимация по появлению
 // slideUp исчезновение с анимацией вверх, slideDown исчезновение с анимацией вниз
for (let i = 0; i != 5; i++) {
    $("h1").slideUp(1000).slideDown(1000);
}

let arr = ["Егор", "Данил", "Никита", "Валера", "Гена"];
for (let i = 0; i < arr.length; i++) {
    $("body").append(`<p>Это мой друг ${arr[i]}</p>`)
}
$("p").hide();
$("p").slideDown(2000);

for (let i = 0; i < 5; i++) {
    $("#shimmery").fadeOut((i + 1)* 1000).fadeIn((i + 1)* 1000)

}
