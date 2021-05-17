function pow(x, n) {
  return x ** n
}
console.log(pow(2, 4))


let x = 0;
function sumTo(n) {
  if (n == 0) {
    return x
  } else {
    x += n
    n--
    sumTo(n)
  }
}
console.log(sumTo(5))


function factorial(n) {
  if (n == 1) {
    return n;
  } else {
    return n * (factorial(n - 1))
  }
}
console.log(factorial(3))
