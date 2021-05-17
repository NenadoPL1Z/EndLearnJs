'use strict';
/** 
// ! Promise  – это специальный объект в JavaScript, который связывает «создающий» и «потребляющий» коды вместе. В терминах нашей аналогии – это «список для подписки». «Создающий» код может выполняться сколько потребуется, чтобы получить результат, а промис делает результат доступным для кода, который подписан на него, когда результат готов.


// ? Данным примером мы показали полседовательную ассинхронность с помощью колбэков

console.log("Request data.....");

// setTimeout(() =>{
//     console.log("Preparing data....");

    // const backendData = {
    //     server: 'aws',
    //     port: 2000,
    //     status: 'working'
    // };
    
//     setTimeout(() => {
//         backendData.modified = true;
//         console.log("Data received", backendData)
//     }, 2000)
// }, 5000)

// ? Примисы - умрощают данную структуру (говорит, что мы будем делать всё последовательно!)

// const promise = new Promise((resolve, reject) => { 
//     setTimeout(() => {
//         console.log("Preparing data.....");
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         };
//         resolve(backendData) //? Сообщаем приомису, что он завершился (успешно!), ПОСЛЕ ОБЪЯВЛЕНИЯ СЛУДЕДУЮЩИЙ КОД БУДЕТ ИГНОРИРОВАТЬСЯ! (МОЖЕМ ПЕРЕДАТЬ ТОЛЬКО 1 АРГУМЕНТ) РАБОТАЕТ С resolve/reject
//     }, 2000)
// });

// promise.then((backendData) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             backendData.modified = true;
//             resolve(backendData)
//         }, 2000)
//     }).then((backendData) => {
//         console.log("Data received",backendData)
//         backendData.fromPromise = true;
//         return backendData;
//     }).then(data => {
//         console.log("Modified", data)
//     }).catch(err => console.error("Error", err))
//     .finally(() => console.log("Finally"))
// })

const sleep = ms => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, ms)
    })
}

// sleep(3000).then(() => console.log("After 3 sec"))
// sleep(4000).then(() => console.log("After 4 sec"))
// sleep(2000).then(() => console.log("After 2 sec"))

Promise.all([sleep(2000), sleep(5000)]).then(() => {
    console.log('All promises')
})

Promise.race([sleep(2000), sleep(5000)]).then(() => {
    console.log('Race promises')
})

*/

// !LEARN JS
/**
 * Когда он получает результат, сейчас или позже – не важно, он должен вызвать один из этих колбэков:

resolve(value) — если работа завершилась успешно, с результатом value.
reject(error) — если произошла ошибка, error – объект ошибки.
Итак, исполнитель запускается автоматически, он должен выполнить работу, а затем вызвать resolve или reject.

У объекта promise, возвращаемого конструктором new Promise, есть внутренние свойства:

state («состояние») — вначале "pending" («ожидание»), потом меняется на "fulfilled" («выполнено успешно») при вызове resolve или на "rejected" («выполнено с ошибкой») при вызове reject.
result («результат») — вначале undefined, далее изменяется на value при вызове resolve(value) или на error при вызове reject(error).

Подведём промежуточные итоги: исполнитель выполняет задачу (что-то, что обычно требует времени), затем вызывает resolve или reject, чтобы изменить состояние соответствующего Promise.

Промис – и успешный, и отклонённый будем называть «завершённым», в отличие от изначального промиса «в ожидании».
 */
// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let containe = {}
//     }, 1000)
//     reject()
// })
// promise.then((containe) => {
//     setTimeout(() => {
//         containe.yes = "done"
//         console.log(containe)
//     }, 2000)
// });

function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Выполнено за ${ms} секунды`)
            resolve()
        }, ms)
    })
}
delay(3000).then();
delay(4000).then();

function showCirclePromise(cx, cy, radius) {
    return new Promise((resolve, reject) => {

        let div = document.createElement('div');
        div.style.width = 0;
        div.style.height = 0;
        div.style.left = cx + 'px';
        div.style.top = cy + 'px';
        div.className = 'circle';
        document.body.append(div);

        setTimeout(() => {
            div.style.width = radius * 2 + 'px';
            div.style.height = radius * 2 + 'px';
        }, 10);

        resolve(div)
    })
}

let button = document.querySelector("#show");

button.addEventListener('click', () => {
    showCirclePromise(150, 150, 100).then((div) => {
    div.classList.add('message-ball');
    div.append("Hello, world!");
})
})