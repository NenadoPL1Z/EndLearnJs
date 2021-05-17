/** //! Приктика - того, что знал!
class Test {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.unknown = "?"
    }

    Hello() {
        return `${this.name} ${this.surname} ${this.age}`
    }
}

class More extends Test {
    constructor(name, surname, age, unknown, fmaily, favoritColor) {
        super(name, surname, age, unknown);
        this.fmaily = fmaily;
        this.favoritColor = favoritColor;
    }

    say() {
        return `${this.name} ${this.surname} ${this.age} ${this.unknown} ${this.fmaily} ${this.favoritColor}`
    }
}

const say = new Test("Rodion", "Pyatigorskiy", 18)
const inheritance = new More("Rodion", "Pyatigorskiy", 18, "", "not More", "black");

console.log(say.Hello())
console.log(inheritance.say())
*/


// ! Теория - LEARJS
//? В JavaScript класс – это разновидность функции.
//! Class Expression
let User = class {
    sayHi() {
        return ("Hello")
    }
}
console.log(new User().sayHi())


// ! РЕШИЛ ЗАДАЧУ!
class Clokc {
    constructor(template) {
        this.template = template;
    }
    render() {
      let date = new Date();

      let hours = date.getHours();

      if (hours < 10) hours = "0" + hours;
      
      let mins = date.getMinutes();
      if (mins < 10) mins = "0" + mins;

      let secs = date.getSeconds();
      if (secs < 10) secs = "0" + secs;


      console.log(`${hours}:${mins}:${secs}`);
    }

    stop() {
        clearInterval(this.timer)
    }
    start(){
        this.render()
        this.timer = setInterval(this.render, 1000)
    }
}

let clc = new Clokc({});

clc.start();
clc.stop();