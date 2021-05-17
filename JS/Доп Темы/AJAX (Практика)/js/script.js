window.addEventListener("DOMContentLoaded", () =>{
    let getUSD = document.querySelector("#usd");
    let getRUB = document.querySelector("#rub");

    getUSD.addEventListener("input", () => {
        
        const req = new XMLHttpRequest();
        req.open("GET", "js/current.json");
        req.setRequestHeader("Content-type", "application/json; charset=utf-8");
        req.send();


        req.addEventListener('load', () => {
            if (req.status === 200) {
                let parse = JSON.parse(req.response)
                if (typeof(getUSD.value) === "string") {
                    getRUB.value = 1;
                }
                getRUB.value = (+getUSD.value * parse.current.usd).toFixed(0);
            } else {
                getRUB.value = "Что-то пошло не так"
            }
        });
    });

});