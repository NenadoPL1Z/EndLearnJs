'use strict';

const person = {
    name: "Alex",
    tel: '+732183812371',
    parents: {
        mom: "Olga",
        dad: "Mike"
    }
}
let formatJSON = JSON.stringify(person) //? превращает объект в json ({"KEY":"VALUE"})

console.log(JSON.parse(formatJSON)) //? обратно в объект

let copy = JSON.parse(JSON.stringify(person.parents)) // ! Клонируем объект!

copy.mom = "NTH"
console.log(person)
console.log(copy)