import Validation from "./validation";
const fetch = require("node-fetch");

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
        }];
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
     * Gets the user
     * @param {String} username - The username of the login user
     * @returns Array
     */
    async getData(username) {
        try {
            // @ts-ignore
            const response = await fetch("https://605a21feb11aba001745da26.mockapi.io/api/v1/loginUsers?name=" + username);

            if (response.status != 200) {
                console.log("Status != 200");
                return null;
            }

            const user = await response.json();

            return user;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    /**
     * Checks if the user is registered
     * @param {String} username - The username from the login
     * @param {String} password - The password from the login
     * @returns String - The error message
     */
    async checkData(username, password) {
        const user = await this.getData(username);

        // the user is not present
        if (user.length == 0) {
            return "The user is not registered";
        } else {
            // the user is present
            if (user[0].password !== password) {
                return "The password is wrong!";
            }
        }
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