'use strict';

//! Объекты это основа JavaScript’а. Сам по себе, объект это набор данных, где каждая единица информации является связью между ключом (или именем) и значением. Почти все объекты в JavaScript это экземпляры Object, который стоит на вершине цепочки прототипов.


//! Простой способ копирования объектов заключается в том, что пройтись циклом по оригинальному объекту и скопировать каждое свойство по очереди. Давайте взглянем на такой код:

let arr = [1, 2, 3, 4, 5];
let clon = [];
for (let value of arr) {
    clon[value] = arr[value];
}

console.log(clon)