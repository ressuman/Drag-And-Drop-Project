// USING NAMESPACES

// Component Base Class
namespace App {
  /**
   * Abstract base class for creating components.
   * Manages the rendering of components based on HTML templates.
   * @template T - The type of the host element.
   * @template U - The type of the element to be created from the template.
   */
  export abstract class Component<
    T extends HTMLElement,
    U extends HTMLElement
  > {
    // The template element used for creating new components.
    templateElement: HTMLTemplateElement;
    // The host element where the component will be attached.
    hostElement: T;
    // The element created from the template.
    element: U;

    /**
     * Creates an instance of Component.
     * @param templateId - The ID of the HTML template element.
     * @param hostElementId - The ID of the host element where the component will be attached.
     * @param insertAtStart - Determines whether the component should be inserted at the beginning or end of the host element.
     * @param newElementId - Optional ID for the new element created from the template.
     */
    constructor(
      templateId: string,
      hostElementId: string,
      insertAtStart: boolean,
      newElementId?: string
    ) {
      // Get the template element by its ID and cast it to HTMLTemplateElement.
      this.templateElement = document.getElementById(
        templateId
      )! as HTMLTemplateElement;

      // Get the host element by its ID and cast it to the generic type T.
      this.hostElement = document.getElementById(hostElementId)! as T;

      // Import the content of the template element.
      const importedNode = document.importNode(
        this.templateElement.content,
        true
      );

      // Get the first child of the imported node and cast it to the generic type U.
      this.element = importedNode.firstElementChild as U;

      // Optionally set a new ID for the element if provided.
      if (newElementId) {
        this.element.id = newElementId;
      }

      // Attach the component element to the host element.
      this.attach(insertAtStart);
    }

    /**
     * Attaches the component element to the host element.
     * @param insertAtBeginning - Determines whether to insert the element at the beginning or end of the host element.
     */
    private attach(insertAtBeginning: boolean) {
      this.hostElement.insertAdjacentElement(
        insertAtBeginning ? "afterbegin" : "beforeend",
        this.element
      );
    }

    /**
     * Abstract method to configure the component.
     * Must be implemented by subclasses.
     */
    abstract configure(): void;

    /**
     * Abstract method to render the content of the component.
     * Must be implemented by subclasses.
     */
    abstract renderContent(): void;
  }
}
