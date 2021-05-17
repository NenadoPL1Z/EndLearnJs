//JSON.stringify может быть применён и к примитивам.
//
//JSON поддерживает следующие типы данных:
//
//Объекты { ... }
//Массивы [ ... ]
//Примитивы:
//строки,
//числа,
//логические значения true/false,
//null.
//
//
//let myData = {
//  name: "Rodion",
//  age: 18,
//  information: ["python", "html", "css", "js"],
//}
//
//let json = JSON.stringify(myData); // преобразуем объект в строку вида json
//alert(json)


alert(JSON.stringify(1));
console.log(JSON.stringify('test'))

console.log(JSON.stringify(true))
console.log(JSON.stringify([1, 2, 3]))


JSON является независимой от языка спецификацией для данных, поэтому JSON.stringify пропускает некоторые специфические свойства объектов JavaScript.

А именно:

Свойства-функции (методы).
Символьные свойства.
Свойства, содержащие undefined.


let name = {
  age: 18
};

let next = {
  name: "Rodion",
  skill: [{number: "CSS"}, {number: "HTML"}, {number: "JS"}],
  place: name
}

name.tnext = next;

console.log(JSON.stringify(next, ['name', 'skill', 'number', 'place', 'age']))

let x = "[1, 2, 3, 4, 5]"

let user = JSON.parse(x) // преабразовываем из строки JSON обратно
console.log(user[0])





let user = {
  name: "Василий Иванович",
  age: 18
};

let x = JSON.stringify(user)
console.log(x)

console.log(JSON.parse(x))
