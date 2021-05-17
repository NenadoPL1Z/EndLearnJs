"use strict";

// //? Тернартный оператор

// function ternar() {
//   let a = undefined;

//   let b = a ? console.log("Hello") : a == "" ? console.log("Yes") : a == undefined ? console.log("und") : console.log("gg");

//   let result = 2 + 1 < 4 ? "Мало" : "Много";

//   console.log(result);

//   let login = "";
//   let message = login == "Сотрудник" ? "Hello" : login == "Директор" ? "Welcome" : login == "" ? "No login" : "";
//   console.log(message);
// }

// //? Виды функций

// function fnct() {
//   function standart(a) {
//     console.log(a);
//   }

//   standart("standart");

//   let expression = function () {
//     return 2;
//   };

//   console.log(expression());

//   (function () {
//     console.log("Hello");
//   })();

//   let arrow = (a, b) => {
//     return a + b;
//   };

//   console.log(arrow(1, 2));
// }

// //? Рекурсия не нужна!

// function sumTo(a) {
//   let y = 0;
//   for (let x = a; x != 0; x--) {
//     y += x;
//   }
//   return y;
// }

// console.log(sumTo(100));

// //? Логический оператор

// console.log((2 && 3 && 0 && null) || 2 || 4);
// console.log(1 || 3 || 4 || 5);
// console.log(2 && 4 && 3 && 2 && 1 && 12);

// //? Замыкания

// function zam(a) {
//   let x = 0;
//   return function () {
//     x++;
//     return function () {
//       return x * a;
//     };
//   };
// }

// let x = zam(10);

// console.log(x()());
// console.log(x()());
// console.log(x()());
// console.log(x()());

// let n = 40;
// function local() {
//   let n = 100;
//   if (true) {
//     let n = 30;
//   }
//   console.log(n);
// }

// local();

// let obj = {
//   name: 5,
//   sayHello() {
//     let x = () => console.log(this);
//     x();
//   },
// };

// obj.sayHello();

// //? call, apply, bind

// function funct(a, b) {
//   return this.name + " " + this.surname + a + b;
// }

// let obj = {
//   name: "Rodion",
//   surname: "Pyatigorskiy",
// };

// console.log(funct.call(obj, "1", "2"));
// console.log(funct.apply(obj, ["2", "1"]));
// let x = funct.bind(obj, "1", "2");

// console.log(x());

//? Функции конструкторы

// function Sum(a, b) {
//   this.max = function () {
//     return a + b;
//   };
//   this.min = function () {
//     return a - b;
//   };
// }

// let sum = new Sum(5, 5);

// console.log(sum.max());
// console.log(sum.min());

//? Прототипное наследование __proto__ (устаревшее)

// const solider = {
//   class: "Solider",
//   healt: 100,
//   gun: "pistol",
// };

// const soliderRare = {
//   armor: "400",
//   gun: "shotgun",
//   //* можно записать наследование вот так
//   __proto__: solider,
// };

// console.log(soliderRare.healt);
// //? Наследовали значения от solider (утаревшее)
// soliderRare.__proto__ = solider;

// let head = {
//   glasses: 1,
// };

// let table = {
//   pen: 3,
//   __proto__: head,
// };

// let bed = {
//   sheet: 3,
//   pillow: 2,
//   __proto__: table,
// };

// let pockets = {
//   money: 2000,
//   __proto__: bed,
// };

// console.log(pockets.pen);
// console.log(bed.glasses);

// let hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach.push(food);
//   },
// };

// let speedy = {
//   stomach: [],
//   __proto__: hamster,
// };

// let lazy = {
//   stomach: [],
//   __proto__: hamster,
// };

// // Этот хомяк нашёл еду
// speedy.eat("apple");
// alert(speedy.stomach); // apple

// // У этого хомяка тоже есть еда. Почему? Исправьте
// alert(lazy.stomach); // apple

// let dictonaty = Object.create(null);

// dictonaty.apple = "Apple";
// dictonaty.__proto__ = "test";
// dictonaty.toString = function () {
//   for (let key in this) {
//     console.log(key);
//   }
// };

// console.log(dictonaty.toString());

//? Классы + наследования классов

// class JS {
//   constructor(name, age, sex) {
//     this.name = name;
//     this.age = age;
//     this.sex = sex;
//   }

//   hello() {
//     return `Hello ${this.name}`;
//   }

//   youAge() {
//     return `You age ${this.age}`;
//   }

//   out() {
//     return this.sex;
//   }
// }

// let test = new JS("Rodion", 18, "female");

// console.log(test.hello());
// console.log(test.youAge());
// console.log(test.out());

// class NextJs extends JS {
//   constructor(name, age, sex, more) {
//     super(name, age, sex);
//     this.more = more;
//   }

//   say() {
//     console.log(this.name, this.age, this.sex, this.more);
//   }
// }

// let next = new NextJs("Rodion", 18, "female", "more...");

// next.say();
// console.log(next.hello());

//? Геттеры и сеттеры

// const obj = {
//   name: "Rodion",
//   surname: "Pyatigroskiy",

//   get propName() {
//     return `${this.name} ${this.surname}`;
//   },

//   set propName(value) {
//     [this.name, this.surname] = value.split(" ");
//   },
// };

// console.log((obj.propName = "Valeriy Nemchink"));
// console.log(obj.name);

//? XMLHttpRequest

// function ajax() {
//   const inputOne = document.querySelector("#ip1");
//   const inputTwo = document.querySelector("#ip2");

//   const req = new XMLHttpRequest();
//   req.open("GET", "local.json");
//   req.setRequestHeader("Content-type", "application/json");
//   req.send();

//   req.addEventListener("load", () => {
//     if (req.status == 200) {
//       let obj = JSON.parse(req.response);
//       console.log(obj);
//       inputTwo.value = obj["form-one"];

//       inputOne.addEventListener("input", () => {
//         inputTwo.value = obj["form-one"] * inputOne.value;
//         localStorage.setItem("number", data);
//       });
//     }
//   });
// }

// ajax();

//? FETCH
// function ftch() {
//   //   let req = fetch("https://jsonplaceholder.typicode.com/posts", {
//   //     method: "GET",
//   //   })
//   //     .then((data) => data.json())
//   //     .then((data) => console.log(data));
//   const inputOne = document.querySelector("#ip1");
//   const inputTwo = document.querySelector("#ip2");

//   let x = 0;

//   let req = fetch("local.json")
//     .then((data) => data.json())
//     .then((data) => {
//       x = data;
//       console.log(data);
//     })
//     .catch(() => {
//       console.error(new Error("Ошибка при запросе"));
//     });

//   inputOne.addEventListener("input", () => {
//     inputTwo.value = inputOne.value * x["form-one"];
//   });
// }

// ftch();

//? Promise

// async function good() {
//   let req = await fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((data) => data.json())
//     .then((data) => console.log(data))
//     .catch(() => console.log("Какая досада"))
//     .catch(() => console.log("Не растраивайся"))
//     .finally(() => console.log("Я сделал всё возможное"));
// }

// let x = new Promise((resolve, reject) => {
//   let req = fetch("https://jsonplaceholder.typicode.com/posts");
//   let error = new Error("Ошибка");
//   if (req.status == 200) {
//     resolve(req.r);
//   }
// });

// x.then((data) => data.json());
// x.then((data) => console.log(data));

// good();

//? try/catch

// try {
//   console.log(20);
//   console.log(x);
// } catch (error) {
//   console.log(error.name);
// } finally {
//   console.log("End?");
// }

// console.log(30);

//? Деструктиризация

// let user = {
//   name: "Json",
//   years: 30,
// };

// const arr = ["1", "2", "3", "4", "5"];

// let { name: n, years: age, more: m = 130 } = user;

// let [one, , tree, four, five] = arr;

// let [...number] = arr;

// console.log(age);
// console.log(m);
// console.log(tree);
// console.log(...number[0]);

//? Event-Loop
// console.log("Hello");

// console.log("start");

// setTimeout(() => {
//   console.log("timer 1");
//   setTimeout(() => {
//     console.log("timer 2");
//   }, 0);
// }, 0);

// setTimeout(() => {
//   console.log("timer 3");
// }, 0);

// console.log("end");

//? spread

let x = ["1", "2", "3", "4", "5"];
let y = ["6", "7", "8", "9", "10"];
let n = [...x, "+", ...y];
console.log(n);

let a = { name: "Rodion", age: 18 };
let b = { city: "c", forme: false };
let c = { ...a, snt: "20", ...b };

console.log(c);

//? reast

function Name(x = 20, y = 10, n) {
  console.log(x, y, n);
}

Name(20, 20, [10, 20, 30, 40, 50]);
