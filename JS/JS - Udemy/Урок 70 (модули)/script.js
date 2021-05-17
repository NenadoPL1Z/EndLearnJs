'use strict';

const app = "123";

const x = 1;

(function() { //? Ананимная самовызывающаяся функция!
    let x = 20
    console.log(x)
    console.log(x + 1)
}());

console.log(x)

//* 2

const user = (function(){
    const privat = function() {
        console.log("I am privat!");
    }

    return {
        sayHello: privat
    };
}())

user.sayHello()
