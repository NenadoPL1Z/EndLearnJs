'use strict';

//! Инкапсуляция (encapsulation) - это механизм, который объединяет данные и код, манипулирующий зтими данными, а также защищает и то, и другое от внешнего вмешательства или неправильного использования. В объектно-ориентированном программировании код и данные могут быть объединены вместе; в этом случае говорят, что создаётся так называемый "чёрный ящик". Когда коды и данные объединяются таким способом, создаётся объект (object). Другими словами, объект - это то, что поддерживает инкапсуляцию.

//! Внутри объекта коды и данные могут быть закрытыми (private). Закрытые коды или данные доступны только для других частей этого объекта. Таким образом, закрытые коды и данные недоступны для тех частей программы, которые существуют вне объекта. Если коды и данные являются открытыми, то, несмотря на то, что они заданы внутри объекта, они доступны и для других частей программы. Характерной является ситуация, когда открытая часть объекта используется для того, чтобы обеспечить контролируемый интерфейс закрытых элементов объекта.

//!На самом деле объект является переменной определённого пользователем типа. Может показаться странным, что объект, который объединяет коды и данные, можно рассматривать как переменную. Однако применительно к объектно-ориентированному программированию это именно так. Каждый элемент данных такого типа является составной переменной.



class User {
    constructor(name, age) {
        this.name = name;
        this._userAge = age; // ? _ перед переменной говорит, что эта переменна будет приватной
    }

    #surname = "Leknoz"; //? # добовляет свойству приватность

    get allSurname() {
        return this.#surname
    }

    set allSurname(name) {
        this.#surname = name
    }

    say() {
        console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this._userAge}`);
    }

    get age() {
        return this._userAge
    }

    set age(age) {
        if (typeof(age) === 'number' && age > 0 && age < 110) {
            this._userAge = age
        } else {
            console.log("Недопустимое значение!")
        }
    }
}

const ivan = new User("Ivan", 22)
console.log(ivan.age) // * геттер

ivan.age = 10 // * сеттер

console.log(ivan.allSurname) // * геттер

console.log(ivan.allSurname = "Pyatigroskiy") //* сеттер
ivan.say() // * Метод


// * Статья;

class Foo {
  publicFieldName = 1;
  #privateFieldName = 2;
  add() {
    return this.publicFieldName + this.#privateFieldName;
  }
}

let x = new Foo()
console.log(x.add())


// ? если объявлять 2 переменные с 1 именем, то мы будем обращаться к публичной
class Foo1 {
    foo = 5
    #foo = 5
}

let n = new Foo1();

console.log(n.foo)

class String { 
    #x = 100;
    #y = 50;
    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }

    eq() {
        return `${this.#x}`
    }
}

let y = new String(10, 20)

console.log(y.eq())



//  ? Практика

class Test {
    constructor(name, age, surname, style) {
        this._name = name; //! приватная переменная
        this.age = age;
        this.surname = surname;
        this.style = style; 
    }

    #zxc = "i am gul"

    set editName(name) {
        this._name = name;
    }

    foo() {
        return `${this._name},\n${this.age}\n`
    }
}

let yx = new Test("Rodion", 18, "Pyatigorskiy", "basic");
yx.name = "Yan"; //? переменная name приватная 
yx.age = 20; //? age не приватная 
console.log(yx.foo())

yx.editName = "Yan" // *используем сеттер

console.log(yx.foo())

console.log(yx.zxc)