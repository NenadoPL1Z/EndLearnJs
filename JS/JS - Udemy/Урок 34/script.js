//! Урок 34 СОБЫТИЯ НА ТЕЛЕФОНЕ!

// touchstart -- при нажатии на элемент
// touchmove -- при зажатии и движении пальцем по элементу
// touchend -- при отжимании от экрана пальца
// touchenter
// touchleave
// touchcancel

window.addEventListener("DOMContentLoaded", () =>{
  const box = document.querySelector(".box");
  box.addEventListener('touchstart', (event) => {
    event.preventDefault();
    console.log("Start")
    console.log(event.targetTouches)
    console.log(event.touches)
  })

  box.addEventListener('touchmove', (event) => {
      event.preventDefault();
      console.log("Move")
      console.log(event.targetTouches[0].pageX) // получаем кординаты
  })

  box.addEventListener('touchend', (event) => {
      event.preventDefault();
      console.log("END")
  })
})

// touches - говорит сколько пальце использовал юзер (1 - палце был нажат)

//targetTouches

//changedTouches - список пальцев которрые учавствую в данном событии 