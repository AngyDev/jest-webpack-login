const { default: Login } = require("./login");

const signIn = document.getElementById("signIn");
const username = document.getElementById("name");
const password = document.getElementById("password");

const login = new Login();

signIn && signIn.addEventListener('click', (e) => {
    e.preventDefault();
    const isValid = login.checkInput(username.value, password.value);
    console.log(isValid);
})