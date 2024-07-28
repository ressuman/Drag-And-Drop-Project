// USING NAMESPACES

// namespace App {
//   /**
//    * Interface for validation rules.
//    * @property value - The value to be validated (can be a string or a number).
//    * @property required - Optional flag indicating if the value is required.
//    * @property minLength - Optional minimum length for string values.
//    * @property maxLength - Optional maximum length for string values.
//    * @property min - Optional minimum value for number values.
//    * @property max - Optional maximum value for number values.
//    */
//   export interface Validatable {
//     value: string | number;
//     required?: boolean;
//     minLength?: number;
//     maxLength?: number;
//     min?: number;
//     max?: number;
//   }

//   /**
//    * Function to validate an object against the Validatable rules.
//    * @param validatableInput - The object containing validation rules and the value to be validated.
//    * @returns {boolean} - Returns true if the value is valid according to the rules, otherwise false.
//    */
//   export function validate(validatableInput: Validatable): boolean {
//     let isValid = true;

//     // Check if the value is required and non-empty.
//     if (validatableInput.required) {
//       isValid =
//         isValid && validatableInput.value.toString().trim().length !== 0;
//     }

//     // Check if the value has a minimum length and is a string.
//     if (
//       validatableInput.minLength != null &&
//       typeof validatableInput.value === "string"
//     ) {
//       isValid =
//         isValid && validatableInput.value.length >= validatableInput.minLength;
//     }

//     // Check if the value has a maximum length and is a string.
//     if (
//       validatableInput.maxLength != null &&
//       typeof validatableInput.value === "string"
//     ) {
//       isValid =
//         isValid && validatableInput.value.length <= validatableInput.maxLength;
//     }

//     // Check if the value has a minimum number value.
//     if (
//       validatableInput.min != null &&
//       typeof validatableInput.value === "number"
//     ) {
//       isValid = isValid && validatableInput.value >= validatableInput.min;
//     }

//     // Check if the value has a maximum number value.
//     if (
//       validatableInput.max != null &&
//       typeof validatableInput.value === "number"
//     ) {
//       isValid = isValid && validatableInput.value <= validatableInput.max;
//     }

//     return isValid;
//   }
// }

// USING ES MODULES
// Validation
/**
 * Interface representing a validatable input.
 * @interface
 */
export interface Validatable {
  /**
   * The value to be validated.
   * Can be either a string or a number.
   * @type {string | number}
   */
  value: string | number;

  /**
   * Indicates whether the value is required.
   * @type {boolean}
   * @optional
   */
  required?: boolean;

  /**
   * Minimum length for a string value.
   * @type {number}
   * @optional
   */
  minLength?: number;

  /**
   * Maximum length for a string value.
   * @type {number}
   * @optional
   */
  maxLength?: number;

  /**
   * Minimum value for a numeric value.
   * @type {number}
   * @optional
   */
  min?: number;

  /**
   * Maximum value for a numeric value.
   * @type {number}
   * @optional
   */
  max?: number;
}

/**
 * Validates an input based on the specified criteria in Validatable.
 * @param {Validatable} validatableInput - The input object containing value and validation criteria.
 * @returns {boolean} - Returns true if the input is valid according to the criteria, otherwise false.
 */
export function validate(validatableInput: Validatable) {
  let isValid = true;

  // Check if the value is required and non-empty.
  if (validatableInput.required) {
    isValid = isValid && validatableInput.value.toString().trim().length !== 0;
  }

  // Check minimum length for string values.
  if (
    validatableInput.minLength != null &&
    typeof validatableInput.value === "string"
  ) {
    isValid =
      isValid && validatableInput.value.length >= validatableInput.minLength;
  }

  // Check maximum length for string values.
  if (
    validatableInput.maxLength != null &&
    typeof validatableInput.value === "string"
  ) {
    isValid =
      isValid && validatableInput.value.length <= validatableInput.maxLength;
  }

  // Check minimum value for numeric values.
  if (
    validatableInput.min != null &&
    typeof validatableInput.value === "number"
  ) {
    isValid = isValid && validatableInput.value >= validatableInput.min;
  }

  // Check maximum value for numeric values.
  if (
    validatableInput.max != null &&
    typeof validatableInput.value === "number"
  ) {
    isValid = isValid && validatableInput.value <= validatableInput.max;
  }

  return isValid;
}
