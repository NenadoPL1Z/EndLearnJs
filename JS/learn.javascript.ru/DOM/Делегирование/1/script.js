const family = document.querySelector("#container")
const elementRemove = document.querySelectorAll("pane")

family.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == "BUTTON") {
        event.target.closest('.pane').remove(); // движение по иерархии
    }
})