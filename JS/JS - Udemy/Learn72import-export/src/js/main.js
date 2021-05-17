import { y as twohundred, x } from "./script.js"; //? Получение переменных (y переменованная в twogundred в этом файле, x) из файла script.js (.js не указываем т.к. webpack понимает)

import * as data from "./script.js"; //? Получение всех переменных сразу (обращение к ним будет как в объекте data.x, data.y)

console.log(`${twohundred} and ${x}`);

data.sayHi();
