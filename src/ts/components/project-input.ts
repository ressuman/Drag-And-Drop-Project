// USING NAMESPACES

// /// <reference path="base-component.ts" />
// /// <reference path="../decorators/autobind.ts" />
// /// <reference path="../util/validation.ts" />
// /// <reference path="../state/project-state.ts" />

// namespace App {
//   /**
//    * Class representing the project input form.
//    * Extends the base Component class.
//    */
//   export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
//     // Input elements for the project form.
//     titleInputElement: HTMLInputElement;
//     descriptionInputElement: HTMLInputElement;
//     peopleInputElement: HTMLInputElement;

//     /**
//      * Creates an instance of ProjectInput.
//      * Initializes the input elements and configures event listeners.
//      */
//     constructor() {
//       super("project-input", "app", true, "user-input");
//       this.titleInputElement = this.element.querySelector(
//         "#title"
//       ) as HTMLInputElement;
//       this.descriptionInputElement = this.element.querySelector(
//         "#description"
//       ) as HTMLInputElement;
//       this.peopleInputElement = this.element.querySelector(
//         "#people"
//       ) as HTMLInputElement;
//       this.configure();
//     }

//     /**
//      * Configures the project input form by adding a submit event listener.
//      */
//     configure() {
//       this.element.addEventListener("submit", this.submitHandler);
//     }

//     renderContent() {}

//     /**
//      * Gathers user input from the form fields and validates the input.
//      * @returns {[string, string, number] | void} - The user input as a tuple if valid, otherwise void.
//      */
//     private gatherUserInput(): [string, string, number] | void {
//       const enteredTitle = this.titleInputElement.value;
//       const enteredDescription = this.descriptionInputElement.value;
//       const enteredPeople = this.peopleInputElement.value;

//       const titleValidatable: Validatable = {
//         value: enteredTitle,
//         required: true,
//       };
//       const descriptionValidatable: Validatable = {
//         value: enteredDescription,
//         required: true,
//         minLength: 5,
//       };
//       const peopleValidatable: Validatable = {
//         value: +enteredPeople,
//         required: true,
//         min: 1,
//         max: 5,
//       };

//       if (
//         !validate(titleValidatable) ||
//         !validate(descriptionValidatable) ||
//         !validate(peopleValidatable)
//       ) {
//         alert("Invalid input, please try again!");
//         return;
//       } else {
//         return [enteredTitle, enteredDescription, +enteredPeople];
//       }
//     }

//     /**
//      * Clears the input fields in the form.
//      */
//     private clearInputs() {
//       this.titleInputElement.value = "";
//       this.descriptionInputElement.value = "";
//       this.peopleInputElement.value = "";
//     }

//     /**
//      * Submit handler to manage the form submission.
//      * Gathers user input, validates it, and adds the project if valid.
//      * Clears the input fields after submission.
//      * @param event - The form submit event.
//      */
//     @autobind
//     private submitHandler(event: Event) {
//       event.preventDefault();
//       const userInput = this.gatherUserInput();
//       if (Array.isArray(userInput)) {
//         const [title, desc, people] = userInput;
//         projectState.addProject(title, desc, people);
//         this.clearInputs();
//       }
//     }
//   }
// }

// USING ES MODULES
import { Component } from "./base-component.js";
import { Validatable, validate } from "../util/validation.js";
import { autobind } from "../decorators/autobind.js";
import { projectState } from "../state/project-state.js";

/**
 * Class representing a form for creating new projects. It extends the base `Component` class
 * and handles user input to create and add new projects.
 * @extends Component<HTMLDivElement, HTMLFormElement>
 */
export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  /**
   * Input element for the project title.
   * @type {HTMLInputElement}
   */
  titleInputElement: HTMLInputElement;

  /**
   * Input element for the project description.
   * @type {HTMLInputElement}
   */
  descriptionInputElement: HTMLInputElement;

  /**
   * Input element for the number of people assigned to the project.
   * @type {HTMLInputElement}
   */
  peopleInputElement: HTMLInputElement;

  /**
   * Creates an instance of ProjectInput.
   * Initializes the form inputs and sets up event listeners.
   */
  constructor() {
    super("project-input", "app", true, "user-input"); // Calls the base constructor.
    this.titleInputElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement; // Initializes the title input element.
    this.descriptionInputElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement; // Initializes the description input element.
    this.peopleInputElement = this.element.querySelector(
      "#people"
    ) as HTMLInputElement; // Initializes the people input element.
    this.configure(); // Sets up event listeners.
  }

  /**
   * Configures the component by setting up event listeners.
   */
  configure() {
    this.element.addEventListener("submit", this.submitHandler); // Adds event listener for form submission.
  }

  /**
   * Renders the content of the component. This method is not used in this class.
   */
  renderContent() {}

  /**
   * Gathers user input from the form and validates it.
   * @returns {[string, string, number] | void} A tuple containing the title, description, and number of people if valid; otherwise, `void`.
   */
  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value; // Gets the entered title.
    const enteredDescription = this.descriptionInputElement.value; // Gets the entered description.
    const enteredPeople = this.peopleInputElement.value; // Gets the entered number of people.

    // Validation rules for title, description, and number of people.
    const titleValidatable: Validatable = {
      value: enteredTitle,
      required: true,
    };
    const descriptionValidatable: Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 5,
    };
    const peopleValidatable: Validatable = {
      value: +enteredPeople,
      required: true,
      min: 1,
      max: 5,
    };

    // Validates user input and shows an alert if any input is invalid.
    if (
      !validate(titleValidatable) ||
      !validate(descriptionValidatable) ||
      !validate(peopleValidatable)
    ) {
      alert("Invalid input, please try again!"); // Shows an alert for invalid input.
      return; // Exits the method if validation fails.
    } else {
      return [enteredTitle, enteredDescription, +enteredPeople]; // Returns validated input as a tuple.
    }
  }

  /**
   * Clears the input fields after submission.
   */
  private clearInputs() {
    this.titleInputElement.value = ""; // Clears the title input.
    this.descriptionInputElement.value = ""; // Clears the description input.
    this.peopleInputElement.value = ""; // Clears the people input.
  }

  /**
   * Handles the form submission, gathers user input, and adds the new project to the state.
   * @param {Event} event - The submit event that triggered the handler.
   */
  @autobind
  private submitHandler(event: Event) {
    event.preventDefault(); // Prevents the default form submission behavior.
    const userInput = this.gatherUserInput(); // Gathers and validates user input.
    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput; // Destructures the validated user input.
      projectState.addProject(title, desc, people); // Adds the new project to the state.
      this.clearInputs(); // Clears the input fields.
    }
  }
}
