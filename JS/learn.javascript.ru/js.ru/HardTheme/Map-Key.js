// нету преобразования типов, можем использовать всё - что угодно!

//let x = new Map()
//x.set(1, "Один") // добавляет в Map ключь - значение
//console.log(x.get(1)) // получаем значение по ключу
//console.log(x.has(1)) // возвращает true/false если есть или нету такого ключа в коллекции
//x.delete(1) // удаляет элемент по ключу
//x.set(1, "Один")
//x.set(2, "Два")
//x.set(3, "Три")
//console.log(x.size)
//x.clear() // очищаем коллекцию полностью
//console.log(x.size) // возвращаем текущее количество элементов

//Каждый вызов map.set возвращает объект map, так что мы можем объединить вызовы в цепочку:

 x.set(1, "Hello").set(2, "Hi").set(3, "Hola");

let x = new Map([
  ["огурец", 1],
  ["помидор", 2],
  ["кобачок", 3]
])
// перебор ключей
for (let y of x.keys()) {
  console.log(y)
}
// перебор значений
for (let y of x.values()) {
  console.log(y)
}
// перебор [ключь, значение]
for (let y of x){
  console.log(y)
}

x.forEach((value, key) => {
  console.log(`Элемент ${value} имеет значение ${key}`)
})


// ПРЕОБРАЗОВАНИЕ ОБЪЕКТА В MAP
let name = {
  name: "Rodion",
  age: 18,
  work: "Programmist"
}

// преобразуем

let y = new Map(Object.entries(name))
// при приобразовании ключь станет строкой
console.log(y.get("name"))

// преобразование Map в Объект

let x = Object.fromEntries(y.entries());
console.log(x.name)


let arr = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"]

function unique(arr){
  let set = new Set();
  for (let x = 0; x < arr.length; x++){
    set.add(arr[x])
  }
  return set.size
};

console.log(unique(arr))



//Объект Set – это особый вид коллекции: «множество» значений (без ключей), где каждое значение может появляться только один раз.
//
//Его основные методы это:
//
//new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), то копирует его значения в новый Set.
//set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
//set.delete(value) – удаляет значение, возвращает true, если value было в множестве на момент вызова, иначе false.
//set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
//set.clear() – удаляет все имеющиеся значения.
//set.size – возвращает количество элементов в множестве.
