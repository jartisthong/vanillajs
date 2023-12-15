const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");


function onLoginSubmit() {
    const username = loginInput.value;
        console.log(username);
}


loginForm.addEventListener("submit", onLoginSubmit)