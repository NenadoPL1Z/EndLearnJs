// const family = document.querySelector("#container");

// family.addEventListener(
//   "click",
//   (event) => {
//     if (event.target && event.target.classList.contains("remove-button")) {
//       console.log(event.target.closest(".pane").remove());
//     }
//   },
//   { capture: true }
// );

let family = document.querySelector("#tree");

family.addEventListener("click", (event) => {
  if (event.target && event.target.tagName == "UL") console.log(event.target);
});
