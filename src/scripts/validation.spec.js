import Validation from './validation';

describe("Validation Test Class", () => {

    const validation = new Validation();

    it("test input is not valid", () => {

        const resultEmpty = validation.isValid("");
        const resultNull = validation.isValid(null);

        expect(resultEmpty).toBeFalsy();
        expect(resultNull).toBeFalsy();

    });

    it("test input is valid", () => {

        const valid = validation.isValid("Angela");

        expect(valid).toBeTruthy();

    });
})