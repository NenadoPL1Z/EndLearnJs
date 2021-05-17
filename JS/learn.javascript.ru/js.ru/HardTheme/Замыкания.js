// // function createCalcFunction(n) {
// //   return function() {
// //     return (1000 * n)
// //   }
// // }

// // let calc = createCalcFunction(42)

// // console.log(calc() + 1000)

// // function Increm(a) {
// //   return function(b) {
// //     return a + b
// //   }
// // }

// // let x = Increm(2)
// // let y = Increm(10)
// // console.log(x(5) + y(20))


// function ulrGenerator(domain) {
//   return function(url) {
//     return `https://${url}.${domain}`
//   }
// }

// const io = ulrGenerator("io") // замыкаем финкцию
// const ru = ulrGenerator("ru")
// const com = ulrGenerator("com")

// console.log(io("codepen"))
// console.log(ru("learn.javascript"))
// console.log(com("youtube"))



//function sum(a) {
//  return function(b) {
//    return a + b
//  }
//}
//console.log(sum(5)(5)) // можно сразу обращаться не присваивая к переменной как в примере ниже
//
//let x = sum
//
//console.log(x(5)(-5))
