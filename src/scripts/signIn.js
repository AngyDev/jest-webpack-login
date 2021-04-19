const { default: Login } = require("./login");

const signIn = document.getElementById("signIn");
const username = document.getElementById("name");
const password = document.getElementById("password");
const loginError = document.getElementById("loginError");
const errorMsg = document.getElementById("errorMsg");


const login = new Login();

signIn && signIn.addEventListener('click', (e) => {
    const isValid = login.checkInput(username.value, password.value);

    if (!isValid) {
        loginError.style.display = "flex";
        errorMsg.innerHTML = "Name or password is not valid";
        e.preventDefault();
    }

});