//// Оператор расширения - его способности
//let a = [1, 2, 3]
//let b = [4, 5, 6]
//let x = [...a,...b] // можнм объединить 2 массива в 1
//console.log(Math.max(...a, ...b)) // можем передать массивы в вычислительные функции
//let y = "Привет"
//console.log([...y])
//console.log({...y})

//Если ... располагается в конце списка аргументов функции, то это «остаточные параметры». Он собирает остальные неуказанные аргументы и делает из них массив.
//Если ... встретился в вызове функции или где-либо ещё, то это «оператор расширения». Он извлекает элементы из массива.
//Полезно запомнить:
//
//Остаточные параметры используются, чтобы создавать новые функции с неопределённым числом аргументов.
//С помощью оператора расширения можно вставить массив в функцию, которая по умолчанию работает с обычным списком аргументов.
