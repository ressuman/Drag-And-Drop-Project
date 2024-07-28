// USING NAMESPACES

namespace App {
  /**
   * Interface for validation rules.
   * @property value - The value to be validated (can be a string or a number).
   * @property required - Optional flag indicating if the value is required.
   * @property minLength - Optional minimum length for string values.
   * @property maxLength - Optional maximum length for string values.
   * @property min - Optional minimum value for number values.
   * @property max - Optional maximum value for number values.
   */
  export interface Validatable {
    value: string | number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
  }

  /**
   * Function to validate an object against the Validatable rules.
   * @param validatableInput - The object containing validation rules and the value to be validated.
   * @returns {boolean} - Returns true if the value is valid according to the rules, otherwise false.
   */
  export function validate(validatableInput: Validatable): boolean {
    let isValid = true;

    // Check if the value is required and non-empty.
    if (validatableInput.required) {
      isValid =
        isValid && validatableInput.value.toString().trim().length !== 0;
    }

    // Check if the value has a minimum length and is a string.
    if (
      validatableInput.minLength != null &&
      typeof validatableInput.value === "string"
    ) {
      isValid =
        isValid && validatableInput.value.length >= validatableInput.minLength;
    }

    // Check if the value has a maximum length and is a string.
    if (
      validatableInput.maxLength != null &&
      typeof validatableInput.value === "string"
    ) {
      isValid =
        isValid && validatableInput.value.length <= validatableInput.maxLength;
    }

    // Check if the value has a minimum number value.
    if (
      validatableInput.min != null &&
      typeof validatableInput.value === "number"
    ) {
      isValid = isValid && validatableInput.value >= validatableInput.min;
    }

    // Check if the value has a maximum number value.
    if (
      validatableInput.max != null &&
      typeof validatableInput.value === "number"
    ) {
      isValid = isValid && validatableInput.value <= validatableInput.max;
    }

    return isValid;
  }
}
