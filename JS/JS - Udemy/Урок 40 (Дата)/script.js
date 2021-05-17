'use strict';

const now = new Date(); // без аргументов показываем текущую дату и время
// new Date.parse('2020-05-01') // альтернативное создание

console.log(now.setHours(18, 40)); // изменяем часы, минуты

console.log(now)
console.log(now.getFullYear()); // получаем год
console.log(now.getMonth()); // месяц
console.log(now.getDay()); // получаем день недели 0 - воскресенье, 6 - суббота

console.log(now.getUTCHours()); // время по 0 часовому поясу

console.log(now.getTimezoneOffset()); // разница в менутах между моим регионом и UTC
console.log(now.getTime()); // получение даты в милисекундах

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

console.log(`Цикл отработал ${end - start}`)

