const API_URL = "https://jsonplaceholder.typicode.com";


/*
const xhr = new XMLHttpRequest();

function onRequestHandler() {
    if(this.readyState === 4 && this.status === 200){
        
        //console.log(this.response);
        const data = JSON.parse(this.response);
        const HTMLResponse = document.querySelector("#app");
        //console.log(data);

        const tpl = data.map((user) => `<li>${user.name}, ${user.email}</li>`);
        HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
    } 
}

xhr.addEventListener("load", onRequestHandler);
xhr.open('GET', `${API_URL}/users`);
xhr.send();*/





/*

const HTMLResponse = document.querySelector("#app");

fetch(`${API_URL}/users`)
    .then((response) => response.json())
    .then((users) => {
    const tpl = users.map((user) => `<li>${user.name}, ${user.email}</li>`)
    HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
});*/









const HTMLResponse = document.querySelector("#app");
const ul = document.createElement("ul");

fetch(`${API_URL}/users`)
    .then((response) => response.json())
    .then((users) => {
        users.forEach((user) => {
            let elem = document.createElement("li");
            elem.appendChild(
                document.createTextNode(`${user.name}, ${user.email}`)
            );
            ul.appendChild(elem);
        });

        HTMLResponse.appendChild(ul);
    });

