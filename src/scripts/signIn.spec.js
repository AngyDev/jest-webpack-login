describe("SignIn button", () => {

    document.body.innerHTML = `
            <div id="loginError">
            <span id="errorMsg"></span></div>`;

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
        const username = "";

        signIn.userLogin("", "");

        expect(errorMsg.innerHTML).toBe("Incorrect name or password");
        expect(username).toBe("");
    });

    it("test user login function, the user is not registered", async() => {

        const signIn = require('./signIn');

        fetch.mockResponse(JSON.stringify([]), { status: 200 });

        const msg = await signIn.userLogin("test", "test");

        expect(msg).toBe("The user is not registered");
    });

    it("test user login function, the password is not correct", async() => {
        const signIn = require('./signIn');

        fetch.mockResponse(JSON.stringify([{ name: 'Angela', password: 'angela' }]), { status: 200 });

        const msg = await signIn.userLogin("Angela", "test");

        expect(msg).toBe("The password is wrong!");
    });

})