// !Лёгкое замыкание
let vall = 50;
function getSumm(a) {
  let vall = 20;
  return function (b) {
    return a + b + vall;
  };
}

console.log(getSumm(10)(10));

function one() {
  let a = 0;
  return function () {
    return (a = a + 1);
  };
}

let xn = one();
console.log(xn());
console.log(xn());
console.log(xn());
console.log(xn());
console.log(xn());
console.log(xn());
console.log(xn());
console.log("x");
