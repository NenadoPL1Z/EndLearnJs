function burgerMenu() {
  let openBurger = document.querySelector(".hamburger");
  openBurger.addEventListener("click", () => {
    openBurger.classList.toggle("hamburger_active");
    document.querySelector(".menu").classList.toggle("menu_active");
    console.log(openBurger);
  });
}

burgerMenu();
