import Validation from "./validation";

/**
 * Class of the login form
 */
export default class Login {

    constructor() {
        this.data = [{
            name: "Angela",
            password: "angela"
        }, {
            name: "Name",
            password: "password"
        }, {
            name: "guest",
            password: "1234"
        }]
    }

    /**
     * Gets the user 
     * @param {String} username - The username from the login 
     * @returns 
     */
    getUser(username) {
        const user = this.data.find(user => user.name === username);
        return user;
    }

    /**
     * Checks if the user is registered
     * @param {String} username - The username from the login
     * @param {String} password - The password from the login
     * @returns String - The error message
     */
    checkUser(username, password) {
        const user = this.getUser(username);

        // the user is not present
        if (user === undefined) {
            return "The user is not registered";
        } else {
            // the user is present
            if (user.password !== password) {
                return "The password is wrong!";
            }
        }

        return;
    }

    /**
     * Cheks if the inputs are valid
     * @param {String} username - The username value
     * @param {String} password - The password value
     * @returns Boolean
     */
    checkInput(username, password) {

        const validation = new Validation();

        const validName = validation.isValid(username);
        const validPassword = validation.isValid(password);

        if (validName && validPassword) {
            return true;
        }

        return false;
    }

}