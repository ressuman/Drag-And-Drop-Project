// USING NAMESPACES

// /// <reference path="base-component.ts" />
// /// <reference path="../decorators/autobind.ts" />
// /// <reference path="../state/project-state.ts" />
// /// <reference path="../models/project.ts" />
// /// <reference path="../models/drag-drop.ts" />

// namespace App {
//   /**
//    * Class representing a list of projects.
//    * Extends the base Component class and implements the DragTarget interface.
//    */
//   export class ProjectList
//     extends Component<HTMLDivElement, HTMLElement>
//     implements DragTarget
//   {
//     // Array to store assigned projects.
//     assignedProjects: Project[];

//     /**
//      * Creates an instance of ProjectList.
//      * @param type - The type of projects to display ("active" or "finished").
//      */
//     constructor(private type: "active" | "finished") {
//       super("project-list", "app", false, `${type}-projects`);
//       this.assignedProjects = [];

//       this.configure();
//       this.renderContent();
//     }

//     /**
//      * Drag over handler to manage the drag over event.
//      * @param event - The drag event.
//      */
//     @autobind
//     dragOverHandler(event: DragEvent) {
//       if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
//         event.preventDefault();
//         const listEl = this.element.querySelector("ul")!;
//         listEl.classList.add("droppable");
//       }
//     }

//     /**
//      * Drop handler to manage the drop event.
//      * @param event - The drag event.
//      */
//     @autobind
//     dropHandler(event: DragEvent) {
//       const prjId = event.dataTransfer!.getData("text/plain");
//       projectState.moveProject(
//         prjId,
//         this.type === "active" ? ProjectStatus.Active : ProjectStatus.Finished
//       );
//     }

//     /**
//      * Drag leave handler to manage the drag leave event.
//      * @param _ - The drag event.
//      */
//     @autobind
//     dragLeaveHandler(_: DragEvent) {
//       const listEl = this.element.querySelector("ul")!;
//       listEl.classList.remove("droppable");
//     }

//     /**
//      * Configure the project list by adding event listeners and setting up state listeners.
//      */
//     configure() {
//       this.element.addEventListener("dragover", this.dragOverHandler);
//       this.element.addEventListener("dragleave", this.dragLeaveHandler);
//       this.element.addEventListener("drop", this.dropHandler);

//       projectState.addListener((projects: Project[]) => {
//         const relevantProjects = projects.filter((prj) => {
//           if (this.type === "active") {
//             return prj.status === ProjectStatus.Active;
//           }
//           return prj.status === ProjectStatus.Finished;
//         });
//         this.assignedProjects = relevantProjects;
//         this.renderProjects();
//       });
//     }

//     /**
//      * Render the content of the project list, setting up the list ID and header text.
//      */
//     renderContent() {
//       const listId = `${this.type}-projects-list`;
//       this.element.querySelector("ul")!.id = listId;
//       this.element.querySelector("h2")!.textContent =
//         this.type.toUpperCase() + " PROJECTS";
//     }

//     /**
//      * Render the projects in the project list.
//      * Clears the list and creates a new ProjectItem for each assigned project.
//      */
//     private renderProjects() {
//       const listEl = document.getElementById(
//         `${this.type}-projects-list`
//       )! as HTMLUListElement;
//       listEl.innerHTML = "";
//       for (const prjItem of this.assignedProjects) {
//         new ProjectItem(this.element.querySelector("ul")!.id, prjItem);
//       }
//     }
//   }
// }

// USING ES MODULES
import { DragTarget } from "../models/drag-drop.js";
import { Project, ProjectStatus } from "../models/project.js";
import { Component } from "./base-component.js";
import { autobind } from "../decorators/autobind.js";
import { projectState } from "../state/project-state.js";
import { ProjectItem } from "./project-item.js";

/**
 * Class representing a project list. It extends the base `Component` class
 * and implements the `DragTarget` interface to handle drag-and-drop operations.
 * @extends Component<HTMLDivElement, HTMLElement>
 * @implements DragTarget
 */
export class ProjectList
  extends Component<HTMLDivElement, HTMLElement>
  implements DragTarget
{
  /**
   * Array to hold projects assigned to this list.
   * @type {Project[]}
   */
  assignedProjects: Project[];

  /**
   * Creates an instance of ProjectList.
   * @param {("active" | "finished")} type - The type of projects this list will manage.
   */
  constructor(private type: "active" | "finished") {
    super("project-list", "app", false, `${type}-projects`);
    this.assignedProjects = [];

    this.configure(); // Sets up event listeners and project state listener.
    this.renderContent(); // Renders the initial content of the list.
  }

  /**
   * Handles the drag over event to allow dropping.
   * @param {DragEvent} event - The drag event that triggered the handler.
   */
  @autobind
  dragOverHandler(event: DragEvent) {
    if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
      event.preventDefault(); // Prevents the default behavior to allow dropping.
      const listEl = this.element.querySelector("ul")!;
      listEl.classList.add("droppable"); // Adds a class to indicate the drop target.
    }
  }

  /**
   * Handles the drop event to move a project to a new status.
   * @param {DragEvent} event - The drag event that triggered the handler.
   */
  @autobind
  dropHandler(event: DragEvent) {
    const prjId = event.dataTransfer!.getData("text/plain"); // Retrieves the project ID from the drag event.
    projectState.moveProject(
      prjId,
      this.type === "active" ? ProjectStatus.Active : ProjectStatus.Finished
    ); // Moves the project to the new status.
  }

  /**
   * Handles the drag leave event to remove drop target styling.
   * @param {DragEvent} event - The drag event that triggered the handler.
   */
  @autobind
  dragLeaveHandler(_: DragEvent) {
    const listEl = this.element.querySelector("ul")!;
    listEl.classList.remove("droppable"); // Removes the drop target styling.
  }

  /**
   * Configures event listeners for drag-and-drop operations and project state updates.
   */
  configure() {
    this.element.addEventListener("dragover", this.dragOverHandler); // Adds drag over event listener.
    this.element.addEventListener("dragleave", this.dragLeaveHandler); // Adds drag leave event listener.
    this.element.addEventListener("drop", this.dropHandler); // Adds drop event listener.

    projectState.addListener((projects: Project[]) => {
      // Filters projects based on the list type (active or finished).
      const relevantProjects = projects.filter((prj) => {
        if (this.type === "active") {
          return prj.status === ProjectStatus.Active;
        }
        return prj.status === ProjectStatus.Finished;
      });
      this.assignedProjects = relevantProjects; // Updates the assigned projects.
      this.renderProjects(); // Renders the updated project list.
    });
  }

  /**
   * Renders the content of the project list.
   */
  renderContent() {
    const listId = `${this.type}-projects-list`;
    this.element.querySelector("ul")!.id = listId; // Sets the ID for the list element.
    this.element.querySelector("h2")!.textContent =
      this.type.toUpperCase() + " PROJECTS"; // Sets the heading for the list.
  }

  /**
   * Renders the projects in the list.
   * Creates a `ProjectItem` for each project and adds it to the list.
   * @private
   */
  private renderProjects() {
    const listEl = document.getElementById(
      `${this.type}-projects-list`
    )! as HTMLUListElement;
    listEl.innerHTML = ""; // Clears the existing content of the list.
    for (const prjItem of this.assignedProjects) {
      new ProjectItem(this.element.querySelector("ul")!.id, prjItem); // Creates and adds a new project item.
    }
  }
}
