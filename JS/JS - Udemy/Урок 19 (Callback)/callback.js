// ! Урок 19  CALLBACK - ФУНКЦИЯ КОТОРАЯ ДОЛЖНА БЫТЬ ВЫПОЛНЕНА ПОСЛЕ ТОГО КАК ДУРГАЯ ФУНКЦИЯ ЗАКОНЧИЛА СВОЁ ВЫПОЛЕНЕНИЕ
function done() {
    console.log("Я что-то понимаю?")
}

function learnJS(lang, callback) { // callback функция
    console.log(`Я учу: ${lang}`);
    callback()
}

learnJS("JavaScript", done)


function learnJS(lang, callback, callback2) { // callback функция
    let learn = () => console.log(lang)
    learn() 
    callback()
    callback2()
}

learnJS("JavaScript", done, function() {
  console.log("Второй колбэк ?")
})



// ?  Второй пример колбэка

function myFunction(callback) {
    const a = [4, 5, 6];
    let element = document.querySelector(".callback");
    callback(element, a); // использование параметра а не функции напрямую даёт адаптивность
}

function out(elem, arr) {
    elem.innerHTML = arr.join(" ")
}
myFunction(out)

// ? Третий приер колбэк


fetch()