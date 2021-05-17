"use strict";
//!AJAX - АСИНХРОННЫЙ КОД!
const inputRub = document.querySelector("#rub"),
  inputUsd = document.querySelector("#usd");

//! Эти 2 события РАЗНЫЕ (ПОСМОТРИ НА ПРИМЕРЕ, КОТОРЫЙ САМ СОЗДАШЬ!)
//? Событие "change" - возниакает когда мы вбиваем что-то в input и выходим из него (нажимаем Tab или на другой элемент!)
//? Событие "input" - происходит когда мы что-то добовляем или убирает в поле сразуже
inputRub.addEventListener("input", () => {
  const request = new XMLHttpRequest(); //? <= Встроенный объект в браузере (XMLHttpRequest)

  //?метод (get/post), ссылка("формируем путь относительно html файла к которому подключен JS"), будет ли код асинхронным, логин, пароль;
  //* request.open(method, url, async, login, pass); ПЕРВЫЕ 2 ПАРАМЕТРА ОБЯЗАТЕЛЬНЫЕ, ОСТАЛЬНЫЕ НЕТ!
  request.open("GET", "js/current.json");
  //! КОГДА МЫ НАСТРАИВАЕМ ЗАПРОС, МЫ ДОЛЖНЫ СКАЗАТЬ ЧТО ИМЕННО МЫ ОТПРАВЛЯЕМ, ЧТОБЫ СЕРВЕР ТОЧНО ПОНИМАЛ, ЧТО ОН ПРИНИМАЕТ!
  //? ТИП-КОНТЕНТА,     ЧТО ПЕРЕДАЁМ,     КОДИРОВКА
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  //!ОТПРАЛЯЕМ ЗАПРОС (Если отпровляем GET запрос, то send будет пустым)!
  request.send();

  //?readystatechange(ИСПОЛЬЗУЕТСЯ РЕДКО) - ЭТО СОБЫТЕ ОСЛЕЖИВАЕТ СТАТУС ГОТОВНОСТИ НАШЕГО ЗАПРОСА В ТЕКУЩИЙ МОМЕНТ
  // request.addEventListener('readystatechange', () => {
  // //* ГОВОРИМ ЕСЛИ текущее состояние нашего запроса 4 (done) И статус сервера 200 (OK)
  //     if(request.readyState === 4 && request.status === 200) {
  //         const date = JSON.parse(request.response);
  //         inputUsd.value = (+inputRub.value / date.current.usd).toFixed(2) //? говорим солкьо знаком будет после запятой;
  //     } else {
  //         inputUsd.value = "Что-то пошло не так";
  //     }
  // });

  // //? Свойство XMLHttpRequest.readyState возвращает текущее состояние объекта XMLHttpRequest. Объект XHR может иметь следующие состояния:
  //* 0	UNSENT	Объект был создан. Метод open() ещё не вызывался.
  //* 1	OPENED	Метод open() был вызван.
  //* 2	HEADERS_RECEIVED	Метод send() был вызван, доступны заголовки (headers) и статус.
  //* 3	LOADING	Загрузка; responseText содержит частичные данные.
  //* 4	DONE	Операция полностью завершена.

  //? load (ИСПОЛЬЗУЕТСЯ ЧАСТО) - срабатые только 1 раз, когда запрос уже полностью готов (НО, НЕ ГОВОРИТ, ЧТО ЗАПРОС БУДЕТ ПОЛНОСТЬЮ УСПЕШЕН!)
  request.addEventListener("load", () => {
    //*Если статус сервера 200 (OK)
    if (request.status === 200) {
      const date = JSON.parse(request.response);
      inputUsd.value = (+inputRub.value / date.current.usd).toFixed(2); //? говорим солкьо знаком будет после запятой;
      console.log();
    } else {
      inputUsd.value = "Что-то пошло не так";
    }
  });

  //? СПИСОК КОДОВ (https://ru.wikipedia.org/wiki/Список_кодов_состояния_HTTP)
  //*status - показывает сатутс нашего запроса = (404, 501, 202)
  //*statusText - текстовое описание ответа от сервера (OK, CREATE, ACCEPTED)
  //* response - ответ от сервера (Ответ который создал backend разработчик)
  //* readyState - текущее состояние нашего запроса (0, 1, 2, 3, 4, 5) (https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest/readyState)
});

/**
    *! ДОП ТЕОРИЯ HMLHttpRequest - XMLHttpRequest это API, который предоставляет клиенту функциональность для обмена данными между клиентом и сервером. Данный API предоставляет простой способ получения данных по ссылке без перезагрузки страницы. Это позволяет обновлять только часть веб-страницы не прерывая пользователя.  XMLHttpRequest используется в AJAX запросах и особенно в single-page приложениях.

    *? Чтобы начать работать с XMLHttpRequest, выполните этот код: 
    ** let (имя переменной) = new XMLHttpRequest();
    
    *! Прододжение (https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest).
 */
