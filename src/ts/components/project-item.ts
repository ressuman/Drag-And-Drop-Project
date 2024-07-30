// USING NAMESPACES

// /// <reference path="base-component.ts" />
// /// <reference path="../decorators/autobind.ts" />
// /// <reference path="../models/project.ts" />
// /// <reference path="../models/drag-drop.ts" />

// namespace App {
//   /**
//    * Class representing a single project item.
//    * Extends the base Component class and implements the Draggable interface.
//    */
//   export class ProjectItem
//     extends Component<HTMLUListElement, HTMLLIElement>
//     implements Draggable
//   {
//     // Private property to store the project data.
//     private project: Project;

//     /**
//      * Getter to return the number of persons assigned to the project as a string.
//      * @returns {string} - The number of persons assigned to the project.
//      */
//     get persons() {
//       if (this.project.people === 1) {
//         return "1 person";
//       } else {
//         return `${this.project.people} persons`;
//       }
//     }

//     /**
//      * Creates an instance of ProjectItem.
//      * @param hostId - The ID of the host element where the project item will be rendered.
//      * @param project - The project data.
//      */
//     constructor(hostId: string, project: Project) {
//       super("single-project", hostId, false, project.id);
//       this.project = project;

//       this.configure();
//       this.renderContent();
//     }

//     /**
//      * Drag start handler to manage the drag start event.
//      * Sets the data transfer object with the project ID and allows the move effect.
//      * @param event - The drag event.
//      */
//     @autobind
//     dragStartHandler(event: DragEvent) {
//       event.dataTransfer!.setData("text/plain", this.project.id);
//       event.dataTransfer!.effectAllowed = "move";
//     }

//     /**
//      * Drag end handler to manage the drag end event.
//      * Currently logs "DragEnd" to the console.
//      * @param _ - The drag event.
//      */
//     dragEndHandler(_: DragEvent) {
//       console.log("DragEnd");
//     }

//     /**
//      * Configures the project item by adding event listeners for drag start and drag end events.
//      */
//     configure() {
//       this.element.addEventListener("dragstart", this.dragStartHandler);
//       this.element.addEventListener("dragend", this.dragEndHandler);
//     }

//     /**
//      * Renders the content of the project item.
//      * Sets the text content for the title, number of persons, and description of the project.
//      */
//     renderContent() {
//       this.element.querySelector("h2")!.textContent = this.project.title;
//       this.element.querySelector("h3")!.textContent =
//         this.persons + " assigned";
//       this.element.querySelector("p")!.textContent = this.project.description;
//     }
//   }
// }

// USING ES MODULES
import { Draggable } from "../models/drag-drop";
import { Project } from "../models/project";
import { Component } from "./base-component";
import { autobind } from "../decorators/autobind";

/**
 * Class representing a single project item. It extends the base `Component` class
 * and implements the `Draggable` interface to handle drag-and-drop operations.
 * @extends Component<HTMLUListElement, HTMLLIElement>
 * @implements Draggable
 */
export class ProjectItem
  extends Component<HTMLUListElement, HTMLLIElement>
  implements Draggable
{
  /**
   * The project associated with this item.
   * @type {Project}
   */
  private project: Project;

  /**
   * Gets the string representation of the number of people assigned to the project.
   * @readonly
   * @type {string}
   */
  get persons() {
    if (this.project.people === 1) {
      return "1 person"; // Singular form for one person.
    } else {
      return `${this.project.people} persons`; // Plural form for multiple people.
    }
  }

  /**
   * Creates an instance of ProjectItem.
   * @param {string} hostId - The ID of the element where the project item will be added.
   * @param {Project} project - The project data associated with this item.
   */
  constructor(hostId: string, project: Project) {
    super("single-project", hostId, false, project.id); // Calls the base constructor.
    this.project = project;

    this.configure(); // Sets up event listeners.
    this.renderContent(); // Renders the content of the project item.
  }

  /**
   * Handles the drag start event, setting the data transfer with the project ID.
   * @param {DragEvent} event - The drag event that triggered the handler.
   */
  @autobind
  dragStartHandler(event: DragEvent) {
    event.dataTransfer!.setData("text/plain", this.project.id); // Sets the data transfer with project ID.
    event.dataTransfer!.effectAllowed = "move"; // Sets the allowed effect to "move".
  }

  /**
   * Handles the drag end event. Currently logs a message to the console.
   * @param {DragEvent} event - The drag event that triggered the handler.
   */
  dragEndHandler(_: DragEvent) {
    console.log("DragEnd"); // Logs a message indicating drag operation has ended.
  }

  /**
   * Configures event listeners for drag operations.
   */
  configure() {
    this.element.addEventListener("dragstart", this.dragStartHandler); // Adds drag start event listener.
    this.element.addEventListener("dragend", this.dragEndHandler); // Adds drag end event listener.
  }

  /**
   * Renders the content of the project item, including title, number of assigned people, and description.
   */
  renderContent() {
    this.element.querySelector("h2")!.textContent = this.project.title; // Sets the project title.
    this.element.querySelector("h3")!.textContent = this.persons + " assigned"; // Sets the number of assigned people.
    this.element.querySelector("p")!.textContent = this.project.description; // Sets the project description.
  }
}
