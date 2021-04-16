import Validation from './validation';

describe("Validation Test Class", () => {

    const validation = new Validation();

    it("test input is not valid", () => {

        const valid = validation.isValid("");

        expect(valid).toBeFalsy();

    });

    it("test input is valid", () => {

        const valid = validation.isValid("Angela");

        expect(valid).toBeTruthy();

    });
})