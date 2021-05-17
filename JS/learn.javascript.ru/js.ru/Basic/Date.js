let now = new Date(); // покажет тукущую дату
// console.log(now)
//Создать объект Date с временем, равным количеству миллисекунд (тысячная доля секунды), прошедших с 1 января 1970 года UTC+0.
now = new Date(0)
// console.log(now)

let Jan02_1970 = new Date(24 * 3600 * 1000); // + 1 день начиная 1970
let Dec31_1969 = new Date(-24 * 3600 * 1000); // - 1 день начиная 1970

let date = new Date("2017-01-26"); // можно указать опред дату

// console.log(date)

let cryDate = new Date(2018, 1, 23, 12,30,0,0)
console.log(cryDate)
console.log(cryDate.getFullYear()) // получаем год
console.log(cryDate.getMonth()) // получить месяц (индексация идёт с 0)
console.log(cryDate.getDate()) // день месяца
console.log(cryDate.getHours())
console.log(cryDate.getMinutes())
console.log(cryDate.getSeconds())
console.log(cryDate.getMilliseconds())
console.log(cryDate.getDay()) // возворщает день недели с (0(понедельник) - 6(воскресенье))





// let now = new Date(2012, 01, 20, 3, 12)
// alert(now)

let now = new Date(2012, 0, 3)
function getWeekDay(date) {
  switch (now.getDay()) {
    case 0:
      console.log("воскресенье");
      break;
    case 1:
      console.log("Понедельник");
      break;
    case 2:
      console.log("Вторник")
      break;
    case 3:
      console.log("Среда");
      break;
    case 4:
      console.log("Четверг");
      break;
    case 5:
      console.log("Пятница");
      break;
    case 6:
      conole.log("Суббота");
      break;
  }
}

getWeekDay(now)


// ЛУЧШАЯ АЛЬТЕРНАТИВА
// function getWeekDay(date) {
//   let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

//   return days[date.getDay()];
// }

// let date = new Date(2014, 0, 3); // 3 января 2014 года
// alert( getWeekDay(date) ); // ПТ


let date = new Date(2015, 0, 2)

function getDateAge(date, days) {
  let y = new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
  return y.getDate()
}

console.log(getDateAge(date, 72317))





function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0)
  return date.getDate()
}

console.log(getLastDayOfMonth(2012, 1))


function getSecondsToTomorrow() {
 let date = new Date()
 return (23 * 3600) - ((date.getHours() * 3600) + (date.getMinutes() * 60) + date.getSeconds())
}
console.log(getSecondsToTomorrow())
