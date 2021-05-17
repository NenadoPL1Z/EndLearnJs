'use strict';

//? filter - сортировка массива с условие

const names = ["Ivan", "Ann", "Ksenia", "Voldemart"];

const shortNames = names.filter((item) => {
    return item.length < 5; //? условие
})

console.log(shortNames)

// ? map

const answers = ["IvAn", "AnnA", "Hello"];

let result = answers.map((item) => item.toLowerCase())

console.log(result);

// ? every/some - возворщают true/false 
//* some - (будет true - если хотябы 1 элемент в массиве будет соответствовать условию)
//* every - (будет true - если все элементы в массиве будет соответствовать условию)

const arr = [4, 'qqw', 'sfwdasfwr'];

console.log(arr.some(item => typeof(item) === "number"));
console.log(arr.every(item => typeof(item) === "number"));

//? reduce
const array = ["П", "р", "и", "в", "е", "т"];

const x = array.reduce((sum, item) => sum + item)

console.log(x)


//? Object.keys(obj) | Object.values(obj)
const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
}

const y = Object.entries(obj).filter(item => item[1] === "persone").map(item => item[0])

console.log(y)