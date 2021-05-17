'use strict';
/**
console.log("Запрос данных...")

const req = new Promise((resolve, reject) => { //? Промис принимает 2 аргумента (resolve - что-то выполнилось правильно, reject - что - то выполнилось неправильно!);
    setTimeout(() => {
    console.log("Подготовка данных....")

    const product = {
        name: "TV",
        price: 2000
    }
    resolve(product);
}, 4000)
});

req.then((product) => { // ? Метод который выполняется на промисе в случае положительного исхода!
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        product.status = 'order';
        resolve(product)
        }, 2000)
    }).then(product => {
        product.modify = true;
        return product
    }).then((product) => {
        console.log(product)
    })//.catch(() => { //! ВЫЗОВИТСЯ В СЛУЧАЕ ОШИБКИ
        //console.error("Произошла обика")
    //})
    .finally(() => { // !Выведиться в конце когда закончится промис
        console.log("Finnaly")
    })
})
*/

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time)
    })
}

// test(1000).then(() => console.log("1000 ms"));
// test(2000).then(() => console.log("2000 ms"));

//? all - принимает внутрь себя массив с промисами
Promise.all([test(1000), test(2000)]).then(() => { //? Этот мето говорит, что мы будем ждать все элементы массива а только после полнной их загрузки, что-то сдлеаем;
    console.log("All")
}); 

Promise.race([test(1000), test(2000)]).then(() => { //? Этот мето говорит, что мы будем обробатывать код, когда какойто элемент массива обработается;
    console.log("Done")
}); 