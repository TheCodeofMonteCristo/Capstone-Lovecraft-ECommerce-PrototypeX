// src/utils/validateInput.js

/**
 * This function validates the input value for forms.
 * It checks if the input is not empty and if it matches a specific pattern (if applicable).
 * 
 * @param {string} value - The input value to be validated.
 * @param {string} type - The type of validation (e.g., "email", "password").
 * @returns {string|null} - Returns an error message if validation fails, or null if valid.
 */
const validateInput = (value, type) => {
    switch (type) {
      case 'email':
        // Validate email with a regular expression
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(value)) {
          return 'Please enter a valid email address.';
        }
        break;
  
      case 'password':
        // Password should have at least 8 characters, including one number and one special character
        const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (!passwordPattern.test(value)) {
          return 'Password must be at least 8 characters long and include a number and a special character.';
        }
        break;
  
      case 'required':
        // Check for required input
        if (value.trim() === '') {
          return 'This field is required.';
        }
        break;
  
      default:
        return null;
    }
  
    return null; // Return null if no errors
  };
  
  export default validateInput;
  