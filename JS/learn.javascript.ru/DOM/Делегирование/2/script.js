const family = document.querySelector('#tree')

family.addEventListener('click', (event) => {
    if (event.target && event.target.tagName == "SPAN") {
        event.target.closest("li").remove();
    }
})