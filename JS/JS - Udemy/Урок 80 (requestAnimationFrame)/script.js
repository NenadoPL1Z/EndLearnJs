const btn = document.querySelector(".btn"),
  elem = document.querySelector(".box");
let pos = 0;

function myAnimation() {
  pos++;
  elem.style.bottom = pos + "px";
  console.log(elem.style.bottom);
  if (pos < 300) {
    requestAnimationFrame(myAnimation);
  } else {
    pos = 0;
  }
}

btn.addEventListener("click", () => {
  requestAnimationFrame(myAnimation);
});
