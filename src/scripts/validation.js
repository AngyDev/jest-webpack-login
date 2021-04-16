/**
 * Validation class
 * Checks the input validation
 */
class Validation {

    /**
     * Checks if the inputs are valid, not empty or null
     * @param {*} value 
     * @returns 
     */
    isValid(value) {

        if (value === "" || value === null) {
            return false;
        }

        return true;
    }
}