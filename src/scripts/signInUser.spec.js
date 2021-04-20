describe("login User method", () => {

    it("test user login function, the user is not registered", async() => {

        // document.body.innerHTML = `
        // <div id="loginError">
        // <span id="errorMsg"></span></div>
        // <input id="name" value="test">
        // <input id="password" value="test">
        // <button id="signIn"></button>`;

        document.body.innerHTML = `
        <div id="loginError">
        <span id="errorMsg"></span></div>
        <input id="name" value="Angela">
        <input id="password" value="test">
        <button id="signIn"></button>`;

        const signIn = require('./signIn');

        //fetch.mockResponse(JSON.stringify([]), { status: 200 });
        fetch.mockResponse(JSON.stringify([{ name: 'Angela', password: 'angela' }]), { status: 200 });

        const msg = await signIn.userLogin();

        //expect(msg).toBe("The user is not registered");
        expect(msg).toBe("The password is wrong!");
    });
});