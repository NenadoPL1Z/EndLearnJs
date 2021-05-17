"use strict";

// function sum(a) {
//   let x = 10;
//   return function (b) {
//     return a++;
//   };
// }

// let y = sum(20);

// console.log(y(5));

// console.log(y(5));

// console.log(y(5));

// function counter() {
//   let x = 0;
//   return function up() {
//     return x++;
//   };
// }

// let a = counter();
// console.log(a());
// console.log(a());
// console.log(a());

// function inArray(a, b) {
//   arr.forEach((item) => {
//     if (item == a[count]) {
//       console.log(item);
//       count++;
//     }
//   });
// }

// function inArray(a) {
//   return function (x) {
//     return x == arr;
//   };
// }

// function inBetween(a, b) {
//   return function (x) {
//     return x >= a && x <= b;
//   };
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];

// console.log(arr.filter(inBetween(2, 6)));

// //? SetInterval

// function printNumbers(from, to) {
//   let x = setInterval(() => {
//     console.log(from);
//     if (from == to) {
//       clearInterval(x);
//     }
//     from++;
//   }, 1000);
// }

// //? call/apply

// let obj = {
//   name: 5,
//   number: 4,
// };

// function context(a, b) {
//   console.log(this.name + a, this.number + b);
// }
// context.call(obj, "1", "2");
// context.apply(obj, ["1", "2"]);

// let x = context.bind(obj, "1", "2");

// function f(x) {
//   console.log(x);
// }

// function delay(f, a) {
//   return function (status) {
//     setTimeout(() => {
//       f(status);
//     }, a);
//   };
// }

// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 2000);
// f1000("test");
// f1500("test-2");

function debounce(alert, time) {
  let counter = 0;
  let cont = time;
  return function (x) {
    setTimeout(() => {
      alert(x);
      counter += 1000;
      cont += time;
      console.log(time);
      console.log(counter);
    }, time);
  };
}

let f1 = debounce(alert, 1000);
f1("one");
f1("two");
setTimeout(() => {
  f1("tree");
}, 100);
setTimeout(() => {
  f1("four");
}, 1100);
setTimeout(() => {
  f1("five");
}, 1500);

// let counter = 1;
// setTimeout(() => {
//   counter++;
//   console.log(counter);
// }, 1000);
