const { default: Login } = require("./login");

const signIn = document.getElementById("signIn");
const username = document.getElementById("name");
const password = document.getElementById("password");
const loginError = document.getElementById("loginError");
const errorMsg = document.getElementById("errorMsg");

const login = new Login();

/**
 * Displays the error and the message and doesn't reload the page
 * @param {String} msg - The error message
 */
export function error(msg) {
    loginError.style.display = "flex";
    errorMsg.innerHTML = msg;
}

/**
 * Checks if the inputs are valid and if the user is present
 * @param {String} username - The value of the name input
 * @param {String} password - The value of the password input
 */
export async function userLogin(username, password) {

    const isValid = login.checkInput(username, password);

    if (!isValid) {
        error("Incorrect name or password");
    } else {
        // Checks if the user is registered 
        try {
            const msg = await login.checkData(username, password);

            // The user is not registered or the password is not valid
            if (msg != undefined) {
                error(msg);
                return msg;
            } else {
                window.location.assign("https://www.google.com");
            }

        } catch (error) {
            console.log(error);
        }
    }

}

signIn && signIn.addEventListener('click', (e) => {
    e.preventDefault();

    // gets the value of the input
    const usernameValue = username.value.trim();
    const passwordValue = password.value;

    userLogin(usernameValue, passwordValue);
});