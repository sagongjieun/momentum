const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#loginInput");
const loginButton = document.querySelector("#loginButton");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginInput.classList.add(HIDDEN_CLASSNAME);
    loginButton.classList.add(HIDDEN_CLASSNAME); //form을 숨기고
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings();
}

function paintGreetings() {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username} :)`;
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null) {
    //show the form
    loginInput.classList.remove(HIDDEN_CLASSNAME);
    loginButton.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else {
    //show the greetings
    loginInput.classList.add(HIDDEN_CLASSNAME);
    loginButton.classList.add(HIDDEN_CLASSNAME);
    paintGreetings();
}