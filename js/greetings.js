const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username";
const HIDDEN_CLASS = "hidden";


// 1. 최초 진입했을 때는 이름을 입력한다
// 2. 입력된 이름을 웹에 저장한다 
// 3. 인삿말 + 이름을 출력한다 (이름 이력창은 숨긴다)

//아래 두가지ㅏ가 입력시에 이뤄져야함 
// 새로고침되는 것도 막아야됨

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


// 화면 보여주는 거에 대하네 거임 
if (localStorage.getItem(USERNAME_KEY) === null) {
    loginForm.classList.remove(HIDDEN_CLASS); 
    loginForm.addEventListener("submit", onSubmit)
} else {
    printGreeting();
}