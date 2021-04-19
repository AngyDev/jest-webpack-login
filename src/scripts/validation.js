/**
 * Validation class
 * Checks the input validation
 */
export default class Validation {

    /**
     * Checks if the inputs are valid, not empty or null
     * @param {*} value - The input value
     * @returns 
     */
    isValid(value) {

        if (value === "" || value === null) {
            return false;
        }

        return true;
    }
}