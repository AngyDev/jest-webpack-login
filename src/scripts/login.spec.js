const { default: Login } = require("./login")

describe("Login form class", () => {

    const login = new Login();

    it("test checks if the input is not empty", () => {

        const result = login.checkInput("name", "pwd");

        expect(result).toBeTruthy();
    });

    it("test checks if the input is empty", () => {

        const result = login.checkInput("", "");
        const resultEmptyName = login.checkInput("", "pwd");
        const resultEmptyPwd = login.checkInput("name", "");

        expect(result).toBeFalsy();
        expect(resultEmptyName).toBeFalsy();
        expect(resultEmptyPwd).toBeFalsy();
    });

    it("test get user: The user is present", () => {
        const result = login.getUser("Angela");

        const obj = { name: 'Angela', password: 'angela' };

        expect(result).toEqual(obj);
    });

    it("test get data: The user is not present", () => {
        const result = login.getUser("prova");

        expect(result).toEqual(undefined);
    });

    it("test method checkUser from user prenset", () => {
        const result = login.checkUser("Angela", "angela");

        expect(result).toBe(undefined);
    });

    it("test method checkUser from user not present", () => {
        const resultUserNotPresent = login.checkUser("test", "angela");
        const resultPasswordError = login.checkUser("Angela", "test");

        expect(resultUserNotPresent).toBe("The user is not registered");
        expect(resultPasswordError).toBe("The password is wrong!");
    });
})