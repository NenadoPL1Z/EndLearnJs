//function hello() {
//  console.log("Hello", this)
//}
//const person = {
//    name: "Rodion",
//    age: 18,
//    sayHello: hello,
//    sayHelloWindow: hello.bind(document),
//    logInfo: function(job, phone) {
//        console.group(`${this.name} info:`)
//        console.log(`Name is ${this.name}`)
//        console.log(`Age is ${this.age}`)
//        console.log(`Job is ${job}`)
//        console.log(`Phone is ${phone}`)
//        console.groupEnd()
//    }
//}
//const lena = {
//    name: "Elena",
//    age: 23
//}
////bind меняет контекст person фукции logInfo на контекст lena
////bind - возвращает функцию
//person.logInfo.bind(lena, 'Frontend', "82138183")()
////call - тоже самое, что и bind, но не возвращает функцию а сразу вызывает
//person.logInfo.call(lena, 'Frontend', "82138183")
////apply - можно передать только 2 параметра, сразу вызывает
//person.logInfo.apply(lena, ['Frontend', "82138183",])
//
//const array = [1, 2, 3, 4, 5]
////function myltBy(arr, n) {
////    return arr.map(function(i){
////        return i * n
////    })
////}
////console.log(myltBy(array, 5))
//
//Array.prototype.multBy = function(n) {
//    console.log("m", this)
//}
//array.multBy(2)


//===========================================================




//let first = function Text () {
//
//  let MyName = {
//  name: "rodion",
//  age: 18,
//  sayHello: function () {
//    console.log(`У множим возраст на 2 = ${this.age * 2}`)
//    console.log(`Меня зовут ${this.name}`)
//  }
//};
//
//  let FantasyName = {
//    name: "Geralt",
//    age: 54,
//    sayHello() {
//      console.log(`Умножить возраст на 2 =  ${this.age * 2}`)
//      console.log(`My name is ${this.name}`)
//    }
//  }
//
//let vote = prompt("Выбери 1", "Normal or Fantasy")
//if (vote == "Normal") {
//  console.log("Hello")
//  MyName.sayHello.call(FantasyName)
//
//} else if (vote == "Fantasy") {
//  FantasyName.sayHello.call(MyName)
//} else {
//  console.log("Отмена действия")
//  }
//}
//let x = (Math.random() * 400)
//console.log(Math.round(x))

//function random(a, b) {
//  return a + (Math.random() * (b - a))
//}
//function randomInteger(min, max) {
//  let c =  min + (Math.random() * (max + 1 - min));
//  return Math.floor(c)
//}

//
//function sumInput() {
//  let arr = [];
//  while(true) {
//    let y = prompt("Введите число", 1)
//    if (y === "" || y === null) {
//      break
//    }
//    arr.push(+y)
//  }
//  console.log(arr)
//  let summ = 0;
//  for (let y = 0; y < arr.length; y++) {
//    summ += arr[y]
//  }
//  return summ
//}
//console.log(sumInput())
//
//
//    function camelize(str) {
//  let spliting = str.split("-");
//  if (spliting[0] == "") spliting.shift() ;
//  let x = spliting.map(function(item){
//    return item[0].toUpperCase() + item.slice(1)
//  });
//  let join = x.join('');
//  return join
//};
//console.log(camelize("background-color"))


//function filterRangeInPlace(arr, a, b){
//  for(let x = 0; x < arr.length; x++){
//
//    if (a <= arr[x] && arr[x] <= b) continue
//    else {
//      arr.splice(x, 1);
//      x = x -1
//    }
//  }
//}
//let arr = [5, 3, 8, 1];
//filterRangeInPlace(arr, 1, 4)
//console.log(arr)
//

//let arr = [5, 3, 8, 1];
//function filterRange(arr, a, b){
//  let newArr = []
//  let map = arr.map(function(item){
//    if (a <= item && item <= b) newArr.push(item)
//  })
//  return newArr
//}
//console.log(filterRange(arr, 1, 4))
//console.log(arr)
//
//let arr = [1, 2, 15];
//arr.sort((a, b) => b - a) // для функции сравнения нужно 2 числа больше и меньше
//console.log(arr)
//
//
//let vasya = { name: "Вася", age: 25 };
//let petya = { name: "Петя", age: 30 };
//let masha = { name: "Маша", age: 28 };
//
//let users = [ vasya, petya, masha ];
//
//let names = users.map(item => item.name)
//
//console.log(names)
//
//
//let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
//let petya = { name: "Петя", surname: "Иванов", id: 2};
//let masha = { name: "Маша", surname: "Петрова", id: 3};
//
//let users = [vasya, petya, masha];
//
//let usersMapped = users.map(item => ({
//  fullName: item.name + " " + item.surname,
//  id: item.id
//}))
//console.log(usersMapped[0])
//
//let vasya = { name: "Вася", age: 25 };
//let petya = { name: "Петя", age: 30 };
//let masha = { name: "Маша", age: 29 };
//
//let arr = [ vasya, petya, masha ];
//
//function getAverageAge(users){
//  let y = 0;
//  let map = users.map(item => item.age)
//  for (let x = 0; x < map.length; x++) {
//    y += map[x]
//  }
//  return y / map.length
//}
//console.log(getAverageAge(arr))


function gallows(word) {
  let x = Array.from(word.toLowerCase())
  let n = []
  for (let i = 0; i < x.length;) {
    let y = prompt("Введите букву", "a")
    if (y == x[i]) {
      n.push(x[i])
      console.log("Вы угадали букву")
      console.log(n.join(""))
      i++
    } else {
      console.log("Вы не угадали букву")
    }
  }
  return `Слово было ${word.toLowerCase()}`
}

console.log(gallows("Rodion"))
