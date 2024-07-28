// USING NAMESPACES

// // Component Base Class
// namespace App {
//   /**
//    * Abstract base class for creating components.
//    * Manages the rendering of components based on HTML templates.
//    * @template T - The type of the host element.
//    * @template U - The type of the element to be created from the template.
//    */
//   export abstract class Component<
//     T extends HTMLElement,
//     U extends HTMLElement
//   > {
//     // The template element used for creating new components.
//     templateElement: HTMLTemplateElement;
//     // The host element where the component will be attached.
//     hostElement: T;
//     // The element created from the template.
//     element: U;

//     /**
//      * Creates an instance of Component.
//      * @param templateId - The ID of the HTML template element.
//      * @param hostElementId - The ID of the host element where the component will be attached.
//      * @param insertAtStart - Determines whether the component should be inserted at the beginning or end of the host element.
//      * @param newElementId - Optional ID for the new element created from the template.
//      */
//     constructor(
//       templateId: string,
//       hostElementId: string,
//       insertAtStart: boolean,
//       newElementId?: string
//     ) {
//       // Get the template element by its ID and cast it to HTMLTemplateElement.
//       this.templateElement = document.getElementById(
//         templateId
//       )! as HTMLTemplateElement;

//       // Get the host element by its ID and cast it to the generic type T.
//       this.hostElement = document.getElementById(hostElementId)! as T;

//       // Import the content of the template element.
//       const importedNode = document.importNode(
//         this.templateElement.content,
//         true
//       );

//       // Get the first child of the imported node and cast it to the generic type U.
//       this.element = importedNode.firstElementChild as U;

//       // Optionally set a new ID for the element if provided.
//       if (newElementId) {
//         this.element.id = newElementId;
//       }

//       // Attach the component element to the host element.
//       this.attach(insertAtStart);
//     }

//     /**
//      * Attaches the component element to the host element.
//      * @param insertAtBeginning - Determines whether to insert the element at the beginning or end of the host element.
//      */
//     private attach(insertAtBeginning: boolean) {
//       this.hostElement.insertAdjacentElement(
//         insertAtBeginning ? "afterbegin" : "beforeend",
//         this.element
//       );
//     }

//     /**
//      * Abstract method to configure the component.
//      * Must be implemented by subclasses.
//      */
//     abstract configure(): void;

//     /**
//      * Abstract method to render the content of the component.
//      * Must be implemented by subclasses.
//      */
//     abstract renderContent(): void;
//   }
// }

// USING ES MODULES
// Component Base Class

/**
 * Base class for creating components with a template. This class handles the setup and
 * rendering of components using HTML templates and provides an abstract API for configuring
 * and rendering content.
 * @template T - Type of the host element.
 * @template U - Type of the element created from the template.
 */
export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  /**
   * The template element used to create the component.
   * @type {HTMLTemplateElement}
   */
  templateElement: HTMLTemplateElement;

  /**
   * The host element where the component will be attached.
   * @type {T}
   */
  hostElement: T;

  /**
   * The element created from the template.
   * @type {U}
   */
  element: U;

  /**
   * Creates an instance of Component.
   * @param {string} templateId - The ID of the HTML template element.
   * @param {string} hostElementId - The ID of the host element where the component will be attached.
   * @param {boolean} insertAtStart - Determines if the component should be inserted at the start or end of the host element.
   * @param {string} [newElementId] - Optional ID for the new element created from the template.
   */
  constructor(
    templateId: string,
    hostElementId: string,
    insertAtStart: boolean,
    newElementId?: string
  ) {
    this.templateElement = document.getElementById(
      templateId
    )! as HTMLTemplateElement; // Retrieves the template element by ID.
    this.hostElement = document.getElementById(hostElementId)! as T; // Retrieves the host element by ID.

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    ); // Imports the content of the template as a new node.
    this.element = importedNode.firstElementChild as U; // Gets the first child element from the imported node.
    if (newElementId) {
      this.element.id = newElementId; // Sets the ID for the new element if provided.
    }

    this.attach(insertAtStart); // Attaches the element to the host element.
  }

  /**
   * Attaches the component element to the host element.
   * @param {boolean} insertAtBeginning - Determines if the element should be inserted at the start or end of the host element.
   * @private
   */
  private attach(insertAtBeginning: boolean) {
    this.hostElement.insertAdjacentElement(
      insertAtBeginning ? "afterbegin" : "beforeend",
      this.element
    ); // Inserts the element at the specified position.
  }

  /**
   * Abstract method for configuring the component. This method must be implemented by subclasses.
   * @abstract
   */
  abstract configure(): void;

  /**
   * Abstract method for rendering content in the component. This method must be implemented by subclasses.
   * @abstract
   */
  abstract renderContent(): void;
}
