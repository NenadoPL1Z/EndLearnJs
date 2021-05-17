export let y = 10;

let x = 40;

console.log(x);

export { x }; //? Перенос этой переменной в другой файл

export function sayHi() {
  console.log("Hello");
}
