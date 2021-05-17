"use strict";

//? Проверяем хранит ли браузер cookie
console.log(document.cookie);

document.cookie = "user=Rodion";

console.log(document.cookie);
