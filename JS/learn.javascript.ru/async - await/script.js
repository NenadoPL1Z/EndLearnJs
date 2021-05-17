'use strict';

// ! Асинхронная функция
//? У слова async один простой смысл: эта функция всегда возвращает промис. Значения других типов оборачиваются в завершившийся успешно промис автоматически.
async function Name() {
    return 1
}

// Name().then(console.log)

// async function Wait() {
//     let y = 20;
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             y = 30
//             resolve(y)
//         }, 2000)
//     })

//     //? Ключевое слово await заставит интерпретатор JavaScript ждать до тех пор, пока промис справа от await не выполнится. После чего оно вернёт его результат, и выполнение кода продолжится.
//     let waitPromise = await promise

//     console.log(waitPromise)

// }

// Wait().then()


async function getUsers(...names) {
    fetch("https://api.github.com/users/" + names[0][0])
    .then(data => data.json())
    .then(data => {
        let x = document.createElement("img");
        x.src = data.avatar_url
        document.querySelector("body").append(x)
    })
    .catch(() => console.error("Error: undefiend"))
}
getUsers(["NenadoPL1Z", "vladilenm"]).then()