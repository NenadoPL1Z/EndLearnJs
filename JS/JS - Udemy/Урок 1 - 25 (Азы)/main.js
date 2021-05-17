// ? Предыдущие уроки удалил - КАК ДАУН, НО ТАМ ЛЁГКАЯ ИНФА!
// ?ОСНОВЫ JS
// !Урок 17
// "use strict";
// const str = "test";
// const arr = [1, 2, 3];

// console.log(str.toUpperCase());
// console.log(str);

// let fruit = "Some fruit";
// console.log(fruit.indexOf("fruit"));

// const logg = "Hello world";
// console.log(logg.slice(6, 11)) // вырезаем с 6 индекса да 11

// console.log(logg.substring(6, 11)) // substring  - тоже самое что и slice,только не поддерживает минусовые индексы

// console.log(logg.substr(6, 5)) // выраезаем с 6 индекса - 5 символов

// const num = 12.2;

// console.log(Math.round(num)); // округляем

// const test = "12.2px";

// console.log(parseFloat(test)) // переводим в другую систему исчесления

// ! Урок 19 // CALLBACK - ФУНКЦИЯ КОТОРАЯ ДОЛЖНА БЫТЬ ВЫПОЛНЕНА ПОСЛЕ ТОГО КАК ДУРГАЯ ФУНКЦИЯ ЗАКОНЧИЛА СВОЁ ВЫПОЛЕНЕНИЕ 
//!             И ЕЩЁ ЭТО ФУНКЦИЯ, которая передана в другую функцию в качестве параметра
// function first() { // функция имеет задержку
//     setTimeout(function() { // зарежка вызова функций на 500 мс
//         console.log(1); // 
//     }, 500);
// }

// function second() {
//     console.log(2);
// }
// first();
// second()

// function done() {
//     console.log("Я что-то понимаю?")
// }

// function learnJS(lang, callback) { // callback функция
//     console.log(`Я учу: ${lang}`);
//     callback()
// }

// learnJS("JavaScript", done)

// ?  Второй пример колбэка

// function myFunction(callback) {
//     const a = [4, 5, 6];
//     let element = document.querySelector(".callback");
//     callback(element, a); // использование параметра а не функции напрямую даёт адаптивность
// }

// function out(elem, arr) {
//     elem.innerHTML = arr.join(" ")
// }
// myFunction(out)

// !Урок 20

// let options = {
//     name: "test",
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log("Test")
//     }
// }
// console.log(options.name)

// delete options.name;

// console.log(options)
// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) == 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`)
//         counter++
//     }
// }

// console.log(Object.keys(options).length)

// ? Деструктиризация

// let [a, ,, c, d] = "Rodion my friend Lola".split(" "); // ,, означает пропуск второй позиции (my)
// console.log(c);

// let [array1, array2, array3, ...arraylast] = ["one", "two", "three", "four", "five"]; // ... arraylast - остаточный параментр 
// console.log(arraylast[1])

// let [one, two, three] = new Set([1, 2, 3]);

// let object = {};
// [object.name, object.age, object.family, object.color] = "Rodion 18 false Black".split(" ");
// console.log(object)

// let {family, age, name, color} = object; // порядок выполнения не важени
// console.log(name)

// let [sayHello = "Hello", not_hello = "Buy!"] = ["Hello?"];
// console.log(sayHello)

// let object = {
//     info: {
//         name: "Valer",
//         age: 18
//     }
// };

// let {info: {name, age, number = 20}} = object;
// console.log(age);

// !Урок 21

// let arr = [1, 2, 3, 6, 8];

// arr.sort((a, b) => (a - b)) // cортировка цифр
// arr.pop();

// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// for (let value of arr) {
//     console.log(value)
// }

// arr.forEach(function(item, index, array){ // гибкий перебор массива - нельзя использовать break, continue
//     console.log(`${index}: ${item} внутри массива ${array}`)
// })

// let str = "Огурец, Поминдор, Капуста"
// console.log(str.split(", ").join("; "))


// ! Урок 22 - Поверхностные копии

// let a = 5;
// let b = a;

// b = b + 5;
// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;

// copy.a = 10;

// console.log(copy)
// console.log(obj)
// ? - 1
// function copy(mainObj) {
//     let objCopy = {};
//     for (let key in mainObj) {
//         objCopy[key] = mainObj[key]
//     }
//     return objCopy;
// } 

// const number = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// }

// const newNumbers = copy(number);

// newNumbers.a = 10;

// console.log(newNumbers)


// ? --2
// const add = {
//     d: 17, 
//     e: 20
// }

// let clone = Object.assign({}, add); // клнирование(создание нового объекта в памяти) объектов (1 арг - указывает куда копировать, 2- арг указывает что копирывать)

// clone.d = 20;
// console.log(add);
// console.log(clone)

// ? --3
// let oldArray = ["a", "b", "c"];
// let newArray = oldArray.slice(); // копирование массива

// newArray[1] = "adwadsadwasd"
// console.log(oldArray);
// console.log(newArray)

// const video = ["youtube", "vimeo", "rutube"],
//       blogs = ["wordpress", "livejournal", "blogger"],
//       internet = [...video, ...blogs, "vk", "facebook"];

// function log(a, b, c) {
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ['a', 'b'];

// const newArray = [...array];

// const q = {
//     one: 1,
//     two: 2
// }

// const newObj = {...q}


// !Урок 23 - ООП

// let str = "some";

// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);

// const soldier = { // общее понятия солдата
//     health: 400,
//     armor: 100,
//     sayHello() {
//         return (`Hello you health ${this.health}`)
//     }
// };

// const jhon_soldier = Object.create(soldier) // прямая прототивная связь

// jhon_soldier.__proto__ = soldier; //(устаревший формат) благодаря прототупи мы джону добавили армор которого небыло, но он не показывается в консоли!

// Object.setPrototypeOf(jhon_soldier, soldeir) //  новое копирование (прототип)

// console.log(jhon_soldier.armor)
// console.log(jhon_soldier.sayHello())

// !Урок 26
/** 
// То String

//1) 
console.log(typeof(String(null)))

//2)
console.log(typeof(5 + ""))

const num = 5;

console.log("https://vk.com/catalog/" + num)

const fontSize = 26 + 'px';

// To number 
// 1)

console.log(typeof(Number("123")))

//2 

console.log(+"5")

// 3)

console.log(parseInt("15px", 10))

let unser = +prompt("Hello", "");


// To boolean

let switcher = null;

if (switcher) {
    console.log("Working")
}

console.log(typeof(!!"44444"))
*/

