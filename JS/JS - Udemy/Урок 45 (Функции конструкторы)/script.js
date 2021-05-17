'use strict';

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`)
    }
}

User.prototype.exit = function() {
    console.log("Пользователь имеет наследование функции")
};
const ivan = new User("Ivan", 28); // функция становится объектом;
const alex = new User("Alex", 32);

console.log(ivan, alex);

ivan.hello();
alex.hello();
alex.exit();

let x = {};
let y = {};


// ! ТЕОРИЯ LEARN-JS
//? При вызове return с объектом, будет возвращён объект, а не this. При вызове return с примитивным значением, примитивное значение будет отброшено.

function BigUser() {

  this.name = "Вася";

  return { name: "Godzilla" };  // <-- возвращает этот объект
}

console.log( new BigUser().name );  // Godzilla, получили этот объект

function Calc() {
    this.read = function() {
        this.a = +prompt("Первое значение", 1)
        this.b = +prompt("Второе значение", 1)
    }
    this.sum = function() {
        return `Summ: ${this.a + this.b}`
    }
    this.mul = function() {
        return `Mul: ${this.a * this.b}`
    }
}

let calculate = new Calc();


function Accumulator(stringValue) {
    this.value = stringValue;
    this.read = function () {
        this.number = +prompt("Число?", 10);
        return this.number + this.value;
    }
}
let sumAcc = new Accumulator(2);

console.log(sumAcc.read());