//! Modal
const modalOpenTarget = document.querySelectorAll("[data-open]"),
  modalCloseTarget = document.querySelectorAll("[data-close]");

let counter = 0;

function openModal(selector) {
  document.querySelector(selector).style.display = "block";
  document.body.style.overflow = "hidden";
  counter++;
}

function closeModal(selector) {
  document.querySelector(selector).style.display = "none";
  document.body.style.overflow = "";
}

//? Делегирование событий, если кликнуть вне модульного окна, то оно скроется
modalCloseTarget.forEach((item) => {
  item.addEventListener("click", (event) => {
    if (
      (event.target && event.target.classList.contains(item.classList.value)) ||
      event.target.tagName === "STRONG"
    ) {
      closeModal(`.${item.classList.value}`);
    }
  });
});

//? Если нажать Esc, то модальное окно скроется
document.addEventListener("keydown", (event) => {
  modalCloseTarget.forEach((item) => {
    if (
      event.code === "Escape" &&
      item.classList.contains(item.classList.value)
    ) {
      closeModal(`.${item.classList.value}`);
    }
  });
});
//? ОТКРЫТИЕ МОДАЬНОГО ОКНА
modalOpenTarget.forEach((item, index) => {
  if (index == 0) {
    item.addEventListener("click", () => {
      openModal(".popup_engineer");
    });
    return;
  }
  item.addEventListener("click", (event) => {
    event.preventDefault();
    openModal(".popup");
  });
});

setTimeout(() => {
  if (counter == 0) {
    openModal(".popup");
  }
}, 600000);

// !*Табы

let tabsElement = document.querySelectorAll(".glazing_block");

let tabsNone = ["tree", "aluminum", "plastic", "french", "rise"];

function changeImgTabs(index) {
  document.querySelector(`.${tabsNone[index]}`).style.display = "block";
}

tabsElement[0].querySelector("a").classList.add("active");

tabsElement.forEach((item, index) => {
  item.addEventListener("click", () => {
    tabsElement.forEach((item) => {
      item.querySelector("a").classList.remove("active");
      tabsElement[index].querySelector("a").classList.add("active");
    });

    tabsNone.forEach(
      (item) =>
        (document.querySelectorAll(`.${item}`)[0].style.display = "none")
    );
    if (index == 0) changeImgTabs(index);
    if (index == 1) changeImgTabs(index);
    if (index == 2) changeImgTabs(index);
    if (index == 3) changeImgTabs(index);
    if (index == 4) changeImgTabs(index);
  });
});

// *Калькулятор

//? Открытие модалки калькулятора
const btnModalCalc = document.querySelectorAll(".glazing_price_btn");
const calcActiveImg = document.querySelectorAll(".popup_calc .big_img img");

btnModalCalc.forEach((item) => {
  item.addEventListener("click", () => {
    openModal(".popup_calc");
    calcActiveImg.forEach((item) => {
      item.style.display = "none";
    });
    calcActiveImg[0].style.display = "inline-block";
  });
});

//* Табы (стёкла)
const calcActive = document.querySelectorAll(".balcon_icons_img");

calcActive.forEach((item, index) => {
  item.addEventListener("click", () => {
    calcActive.forEach((item) => {
      item.classList.remove("do_image_more");
    });
    calcActiveImg.forEach((item) => {
      item.style.display = "none";
    });
    item.classList.add("do_image_more");
    calcActiveImg[index].style.display = "inline-block";
  });
});

//* Проверка инпутов

const calcInput = document.querySelectorAll(".popup_calc_content input"),
  calcNext = document.querySelector(".popup_calc_button"),
  calcCheckbox = document.querySelectorAll(
    ".popup_calc_profile .checkbox-custom"
  );

calcInput.forEach((item, index) => {
  item.addEventListener("input", () => {
    if (calcInput[0].value && calcInput[1].value) {
      calcNext.addEventListener("click", () => {
        closeModal(".popup_calc");
        openModal(".popup_calc_profile");
      });
    } else {
    }
  });
});

//? Проверка чекбокса
calcCheckbox.forEach((item, index) => {
  let checkboxWarm = document.querySelector("#checkbox-warm"),
    checkboxCold = document.querySelector("#checkbox-cold");
  item.addEventListener("click", () => {
    if (index == 0) {
      checkboxWarm.checked = false;
    } else {
      checkboxCold.checked = false;
    }
  });
});

//? Открытие последней модалки
const btnFinalModalCalc = document.querySelector(".popup_calc_profile_button");

btnFinalModalCalc.addEventListener("click", () => {
  openModal(".popup_calc_end");
  closeModal(".popup_calc_profile");
});

//* Табы 2

const tabConstuction = document.querySelectorAll(".decoration_item div");
const showContenConstruction = document.querySelectorAll("#dec");

tabConstuction.forEach((item, index) => {
  item.addEventListener("click", () => {
    tabConstuction.forEach((item) => {
      item.classList.remove("after_click");
    });
    showContenConstruction.forEach((item) => {
      item.style.display = "none";
    });
    item.classList.add("after_click");
    showContenConstruction[index].style.display = "block";
  });
});

//* Таймер

const deadline = "2021-09-25";

function getTimeRemaning(endtime) {
  const time = Date.parse(endtime) - Date.parse(new Date()),
    days = Math.floor(time / (1000 * 60 * 60 * 24)),
    hours = Math.floor(((time / 1000) * 60 * 60) % 24),
    minutes = Math.floor((time / 1000 / 60) % 60),
    seconds = Math.floor((time / 1000) % 60);

  return {
    total: time,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function getZero(num) {
  if (num >= 0 && num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
}

function setClock(selector, endtime) {
  const timer = document.querySelector(selector),
    days = timer.querySelector("#days"),
    hours = timer.querySelector("#hours"),
    minutes = timer.querySelector("#minutes"),
    seconds = timer.querySelector("#seconds"),
    timerInderval = setInterval(updateClock, 1000);

  updateClock();

  function updateClock() {
    const t = getTimeRemaning(endtime);

    days.innerHTML = getZero(t.days);
    hours.innerHTML = getZero(t.hours);
    minutes.innerHTML = getZero(t.minutes);
    seconds.innerHTML = getZero(t.seconds);

    if (t.total <= 0) {
      clearInterval(timerInderval);
    }
  }
}

setClock("#timer", deadline);

//* Отправка форм

const form = document.querySelectorAll("form"),
  input = document.querySelectorAll("input"),
  phoneNumber = document.querySelectorAll('input[name="user_phone"]');

//? Запрет писать буквы через регулярные выражения
phoneNumber.forEach((item) => {
  item.addEventListener("input", () => {
    item.value = item.value.replace(/\D/, "");
  });
});

const message = {
  loading: "Загрузка...",
  success: "Спасибо! Скоро мы с вами свяжемся",
  failure: "Что-то пошло не так",
};

const postData = async (url, data) => {
  //? Добовляем текст, что что-то загружается
  document.querySelector(".status").textContent = message.loading;
  //? Fetch - POST
  let res = await fetch(url, {
    method: "POST",
    body: data,
  });
  //? Возворщаем конечный результат!
  return await res.text();
};

//? Добовляем каждой форме событие отправки инпута(enter)
form.forEach((item) => {
  item.addEventListener("submit", (event) => {
    //? Отменяем стандартное поведение формы
    event.preventDefault();

    //? Создаём элемент загрузки на сайте
    let statusMeassage = document.createElement("div");
    statusMeassage.classList.add("status");
    item.appendChild(statusMeassage);

    //? FormData - найдёт все инпуты, соберёт их в специальную структуру
    const formData = new FormData(item);

    //? Обращаемся к функции в которой FETCH
    postData("assets/server.php", formData)
      .then((res) => {
        console.log(res);
        statusMeassage.textContent = message.success;
      })
      .catch(() => (statusMeassage.textContent = message.failure))
      .finally(() => {
        input.forEach((item) => {
          item.value = "";
        });
        setTimeout(() => {
          statusMeassage.remove();
        }, 5000);
      });
  });
});
