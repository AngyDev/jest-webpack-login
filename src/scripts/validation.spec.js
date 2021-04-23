import Validation from './validation';

describe("Validation Test Class", () => {

    const validation = new Validation();

    it("test input is empty", () => {

        const resultEmpty = validation.isValid("");

        expect(resultEmpty).toBeFalsy();

    });

    it("test input is null", () => {

        const resultNull = validation.isValid(null);

        expect(resultNull).toBeFalsy();

    });

    it("test input is valid", () => {

        const valid = validation.isValid("Angela");

        expect(valid).toBeTruthy();

    });
})