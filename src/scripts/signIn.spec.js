describe("SignIn button", () => {

    document.body.innerHTML = `
            <div id="loginError">
            <span id="errorMsg"></span></div>
            <input id="name" value="">
            <input id="password" value="">
            <button id="signIn"></button>`;

    it("test error function", () => {

        const signIn = require('./signIn');

        const loginError = document.getElementById("loginError");
        const errorMsg = document.getElementById("errorMsg");

        const msg = "Error";

        signIn.error(msg);

        expect(errorMsg.innerHTML).toBe("Error");
        expect(loginError.style.display).toBe("flex");
    });

    it("test user login function, the value of the inputs are empty", () => {

        const signIn = require('./signIn');

        const errorMsg = document.getElementById("errorMsg");
        const username = document.getElementById("name");

        signIn.userLogin();

        expect(errorMsg.innerHTML).toBe("Incorrect name or password");
        expect(username.value).toBe("");
    });

})