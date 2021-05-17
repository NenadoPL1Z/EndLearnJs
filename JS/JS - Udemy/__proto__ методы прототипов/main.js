const rodion = {
  name: "Rodion",
  age: 18,
  color: "Black",
  sayHello() {
    return `Hello ${this.name}`;
  },
};

const vlad = {
  name: "Vlad",
  age: 20,
};

console.log(Object.getPrototypeOf(vlad) === rodion); // показывает наследуем ли мы что то от прототипа rodion (true/false)
Object.setPrototypeOf(vlad, rodion); // наследовали в объект vlad нехватающие свойства и методы у объекта rodion;
console.log(Object.getPrototypeOf(vlad) === rodion);
console.log(vlad);
console.log(vlad.age);
console.log(vlad.color);
console.log(vlad.sayHello());

let animal = {
  eats: false,
};

let rabbit = Object.create(animal, {
  name: {
    value: "animal",
  },
}); //создаёт новый объект с указанным прототипом и свойствами. наследовали в объект кролик всё что было в объкте animal, у объекта create есть второе свойство не обязательное - которое создаёт новые параметры
console.log(rabbit);
console.log(rabbit.eats);
console.log(rabbit.name);

console.log(Object.getPrototypeOf(rabbit) === animal);
