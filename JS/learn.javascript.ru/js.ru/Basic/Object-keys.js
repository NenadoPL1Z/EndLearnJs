//Для простых объектов доступны следующие методы:
//
//Object.keys(obj) – возвращает массив ключей.
//Object.values(obj) – возвращает массив значений.
//Object.entries(obj) – возвращает массив пар [ключ, значение].
//Обратите внимание на различия (по сравнению с map, например):
//
//Map    Object
//Синтаксис вызова    map.keys()    Object.keys(obj), не obj.keys()
//Возвращает    перебираемый объект    «реальный» массив
//Первое отличие в том, что мы должны вызвать Object.keys(obj), а не obj.keys().
//
//Почему так? Основная причина – гибкость. Помните, что объекты являются основой всех сложных структур в JavaScript. У нас может быть объект data, который реализует свой собственный метод data.values(). И мы всё ещё можем применять к нему стандартный метод Object.values(data).
//
//Второе отличие в том, что методы вида Object.* возвращают «реальные» массивы, а не просто итерируемые объекты. Это в основном по историческим причинам.




//let name = {
//  name: "Stiv",
//  age: 18
//}
//
//console.log(Object.keys(name))
//console.log(Object.values(name))
//console.log(Object.entries(name))
//
//for (let value of Object.values(name)) {
//  console.log(value)
//}
//
//
//let salaries = {
//  "John": 100,
//  "Pete": 300,
//  "Mary": 250
//};
//
//function sumSalaries(salaries) {
//  let y = 0;
//  for (let salar of Object.values(salaries)) y += salar;
//  return y
//}
//
//console.log(sumSalaries(salaries))



//let user = {
//  name: "John",
//  age: 30
//};
//
//function count(obj) {
// return Object.keys(obj).length;
//}
//
//console.log(count(user))
