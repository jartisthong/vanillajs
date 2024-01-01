const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username";
const HIDDEN_CLASS = "hidden";

function onSubmit(event) {
    event.preventDefault();
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    printGreeting();
}

function printGreeting() {
    const savedUsername = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${savedUsername}`;
    loginForm.classList.add(HIDDEN_CLASS);
    greeting.classList.remove(HIDDEN_CLASS); 
}

if (localStorage.getItem(USERNAME_KEY) === null) {
    loginForm.classList.remove(HIDDEN_CLASS); 
    loginForm.addEventListener("submit", onSubmit)
} else {
    printGreeting();
}