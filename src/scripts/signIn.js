// @ts-nocheck
const { default: Login } = require("./login");

const signIn = document.getElementById("signIn");
const username = document.getElementById("name");
const password = document.getElementById("password");
const loginError = document.getElementById("loginError");
const errorMsg = document.getElementById("errorMsg");

const login = new Login();

/**
 * Displays the error and the message and doesn't reload the page
 * @param {Event} e - The event of the button
 * @param {String} msg - The error message
 */
function error(e, msg) {
    loginError.style.display = "flex";
    errorMsg.innerHTML = msg;
    e.preventDefault();
}

signIn && signIn.addEventListener('click', (e) => {
    // gets the value of the input
    const usernameValue = username.value.trim();
    const passwordValue = password.value;

    const isValid = login.checkInput(usernameValue, passwordValue);

    if (!isValid) {
        error(e, "Incorrect name or password");
    } else {
        // Checks if the user is registered 
        const msg = login.checkUser(usernameValue, passwordValue);
        // The user is not registered or the password is not valid
        if (msg != undefined) {
            error(e, msg);
        }
    }
});