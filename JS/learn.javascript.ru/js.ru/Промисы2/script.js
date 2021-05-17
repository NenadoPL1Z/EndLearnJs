
/**
 *! XMLHttpsRequest + Promise 
function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {        
        const xhr = new XMLHttpRequest();

        xhr.open(method, url); //* открываем новое соединение

        xhr.responseType = "json";

        xhr.setRequestHeader("Content-Type", "application/json")

        xhr.addEventListener("load", () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        })

        xhr.send(JSON.stringify(body)) //* Отправляем запрос!
    })
}

// sendRequest("GET", "https://jsonplaceholder.typicode.com/posts")
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

sendRequest("POST", "https://jsonplaceholder.typicode.com/posts", {
    name: "Rodion",
    age: 18
}).then(data => console.log(data))
  .catch(err => console.log(err))

*/



// ! Fetch + Promise

function sendRequest(method, url, body = null) {
    //* Метод GET у fetch
    //? fetch 1 параметром принимает url 
    // return fetch(url).then(response => {
    //     return response.json()
    // }) //?метод fetch сразу возврощает промис
    //* Метод POST у fetch

    const headers = {
        "Content-Type": "application/json" 
    }
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: headers
    }).then(response => {
        if (response.ok) {
            return response.json()
        }
        return response.json().then(error => {
            const e = new Error("Что-то пошло не так!")
            e.data = error
            throw e
        })
    })
}

// sendRequest("GET", "https://jsonplaceholder.typicode.com/posts")
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

sendRequest("POST", "https://jsonplaceholder.typicode.com/posts", {
    name: "Rodion",
    age: 18
})
    .then(data => console.log(data))
    .catch(err => console.log(err))