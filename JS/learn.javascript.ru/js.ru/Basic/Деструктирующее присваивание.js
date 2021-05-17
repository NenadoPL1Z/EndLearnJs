// Деструктуризация массива

let arr = ["Rodion", "Pyatigroskiy"];

let [firstName, surname] = arr; //  firstName = arr[0] , surname = arr[1]

console.log(firstName)

arr = ["Rodion", "18", "Pyatigorskiy"];

[firstName,,surname] = arr // пропуск можно сделать пустой запятой ,

console.log(surname)

let [a, b, c, x] = "abcd"

console.log(c)

let [one, two, three] = new Set([1, 2, 3])
console.log(one)


let user = {};
[user.name, user.surname] = "Ilya Kanator".split(" ")
console.log(user.name)

user = {
  name: "John",
  age: 18
}

for (let [key, value] of Object.entries(user)) {
  console.log(`${key} ${value}`)
}

let [name = "Rodion", age] = [, 18] // могут иметь страндратные значения
console.log(name)
console.log(age)


// Дуструктиризация объекта


let options = {
  title: "Menu",
  width: 100,
  height: 200
};
// Если мы хотим присвоить свойство объекта переменной с другим названием, например, свойство options.width присвоить переменной w, то мы можем использовать двоеточие:
let {height: h, width: w, title: t} = options; // присваиваюстя аналагичные переменнты, порядок не имеет значение
console.log(t)
console.log(w)
console.log(h)

options = {
  title: "Menu",
  name: "rodion"
}

let {width: y = 500, height: x = 500, title} = options

let {name: n} = options

console.log(title, x, y, n)



let options = {
  title: "Menu",
  width: 100,
  height: 200
};
// Что если в объекте больше свойств, чем у нас переменных? Можем ли мы взять необходимые нам, а остальные присвоить куда-нибудь?
// Можно использовать троеточие, как и для массивов.
let {title, ...rest} = options;

console.log(title, rest.width, rest.height)




//
//Вложенная деструктуризация


let garden = {
  color: ["black", "red", "white", "yellow", "blue"],
  size: {
    name: "Rodion",
    age: 18,
    surName: "Pyat"
  },
  Travel: 120
};

let {
  color: [color1, color2, color3, color4, color5],
  size:{
    name,
    age,
    surName
  },
  Travel,
  title = "menu"
} = garden;

console.log(color5)
console.log(color2)
console.log(name)
console.log(age)
console.log(Travel)
console.log(title)


let user = {
  name: "John",
  years: 30,
}

let {name, years, isAdmin = "false"} = user;

console.log(name)
console.log(years)
console.log(isAdmin)




let salaries =  {
  "John": 100,
  "Pete": 300,
  "Marry": 250,
  "Vova": 400
};
function topSalary(obj) {
  if (Object.keys(obj).length >= 1) {
    let x = new Map()
    let y = 0;
    for (let [key, value] of Object.entries(obj)) {
      x.set(value, key)
      if (value > y) y = value;
    }
    return x.get(y)
  } else {
    return null
  }
}
console.log(topSalary(salaries))


// Деструктированное испльзование функций - https://prnt.sc/10z8lnk
