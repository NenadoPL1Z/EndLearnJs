'use strict'

/**
//! 1) Обычная функция: this = window, но если стоит use strict то, this = undefined
function showThis(a, b) {
    function sum() {
        return a + b;
    }

    console.log(sum());
}

showThis(4, 5);

//! 2) Контекст у методов объекта - это будет сам объект

const obj = {
    a: 20,
    b: 15,
    sum() {
        function shout() {
            console.log(this)
        }
        shout();
    }
}

obj.sum()

//! 3) this в конструкторая и классах - это новый экземпляр объекта

function User (name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log("Hello! " + this.name)
    }
}
let ivan = new User("Ivan", 23);


//! 4) Ручная привязка this(call, apply, bind)

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);   
}

const user = {
    name: "Jhon"
}

sayName.call(user, 'Smith') //? изменяем контекст вызова на объект, второй аргумент передаётся для обозначения аргументво у фнкции разница между CALL И APPLY только в передачи аргументов (синтаксис)
sayName.apply(user, ["Smith"])
function count(num) { //! созадём функцию с контекстом
    return this*num;
}

const double = count.bind(2); //! ГОВОРИМ что пременна double будет создержать в себе новую функцию double со значенеи 2
//? bind создаёт новую функцию и под неё устанавливаем удваивание
console.log(double(3))
console.log(double(13))

const btn = document.querySelector("button");

btn.addEventListener('click', function() { //! Когда объявляем в качестве колбек функции (функцию диклар..) то this будет элемент который мы выбрали, но если мы будем использовать стрелочную функцию, то this будет обращаться window;
    console.log(this)
})

const object = {
    num: 5,
    sayNumber: function() {
        const say = () => { //! this нету в стрелочной функции, так - что мы будет ссылкаться на родительский элемент;
            console.log(this);
        }
        say();
    }
}

object.sayNumber();

const Dabl = a => a * 2;

console.log(Dabl(4))

*/
