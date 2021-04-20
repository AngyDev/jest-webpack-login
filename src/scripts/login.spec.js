// @ts-nocheck
const { default: Login } = require("./login")

describe("Login form class", () => {

    const login = new Login();

    // Resets the fetch mock before to user the fetch
    beforeEach(() => {
        fetch.resetMocks();
    })

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

    it("test method checkUser from user present", () => {
        const result = login.checkUser("Angela", "angela");

        expect(result).toBe(undefined);
    });

    it("test method checkUser from user not present", () => {
        const resultUserNotPresent = login.checkUser("test", "angela");
        const resultPasswordError = login.checkUser("Angela", "test");

        expect(resultUserNotPresent).toBe("The user is not registered");
        expect(resultPasswordError).toBe("The password is wrong!");
    });

    it("test method get data", async() => {
        //fetch.mockResponseOnce(JSON.stringify([{ name: 'Angela', password: 'angela' }]));

        fetch.mockResponse(JSON.stringify([{ name: 'Angela', password: 'angela' }]), { status: 200 });

        const result = await login.getData("Angela");

        const obj = [{ name: 'Angela', password: 'angela' }];

        expect(result).toEqual(obj);
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenLastCalledWith("https://605a21feb11aba001745da26.mockapi.io/api/v1/loginUsers?name=Angela");
    });

    it("test method get data with response status 400", async() => {
        fetch.mockResponse(JSON.stringify([]), { status: 400 });

        const result = await login.getData("Angela");

        expect(result).toBeNull;
        expect(fetch).toHaveBeenCalledTimes(1);
    });

    it("test method get data no user", async() => {
        fetch.mockResponseOnce(JSON.stringify([]));

        const result = await login.getData("test");

        expect(result).toEqual([]);
    });

    it("test method get data catches error and returns null", async() => {
        fetch.mockReject(() => "API failure");

        const result = await login.getData("Angela");

        expect(result).toBeNull();
        expect(fetch).toHaveBeenCalledTimes(1);
    });

})