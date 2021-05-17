'use strict';

//? ГЕТТЕРЫ получаем значение свойства
//? СЕТТЕРЫ устанавливаем значение свойства

const persone = {
    name: "Alex",
    age: "25",
    get userAge() { 
        return this.age
    },
    set userAge(number) {
        this.age = number;
    }
}

console.log(persone.userAge = 30);
console.log(persone.userAge)

// * ДОП ТЕОРИЯ