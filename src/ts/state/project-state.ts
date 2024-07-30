// USING NAMESPACES

// namespace App {
//   /**
//    * Type alias for a listener function that takes an array of items of type T.
//    * @template T - The type of items the listener function will handle.
//    */
//   type Listener<T> = (items: T[]) => void;

//   /**
//    * Base state class that manages listeners.
//    * @template T - The type of items the state will manage.
//    */
//   class State<T> {
//     // Array to store listener functions.
//     protected listeners: Listener<T>[] = [];

//     /**
//      * Adds a listener function to the state.
//      * @param listenerFn - The listener function to be added.
//      */
//     addListener(listenerFn: Listener<T>) {
//       this.listeners.push(listenerFn);
//     }
//   }

//   /**
//    * Project state management class, extends the base State class.
//    */
//   export class ProjectState extends State<Project> {
//     // Array to store projects.
//     private projects: Project[] = [];
//     // Singleton instance of ProjectState.
//     private static instance: ProjectState;

//     /**
//      * Private constructor to prevent direct instantiation.
//      */
//     private constructor() {
//       super();
//     }

//     /**
//      * Returns the singleton instance of ProjectState, creating it if it doesn't exist.
//      * @returns {ProjectState} - The singleton instance of ProjectState.
//      */
//     static getInstance() {
//       if (this.instance) {
//         return this.instance;
//       }
//       this.instance = new ProjectState();
//       return this.instance;
//     }

//     /**
//      * Adds a new project to the state.
//      * @param title - The title of the project.
//      * @param description - The description of the project.
//      * @param numOfPeople - The number of people assigned to the project.
//      */
//     addProject(title: string, description: string, numOfPeople: number) {
//       const newProject = new Project(
//         Math.random().toString(),
//         title,
//         description,
//         numOfPeople,
//         ProjectStatus.Active
//       );
//       this.projects.push(newProject);
//       this.updateListeners();
//     }

//     /**
//      * Moves a project to a new status.
//      * @param projectId - The ID of the project to be moved.
//      * @param newStatus - The new status of the project.
//      */
//     moveProject(projectId: string, newStatus: ProjectStatus) {
//       const project = this.projects.find((prj) => prj.id === projectId);
//       if (project && project.status !== newStatus) {
//         project.status = newStatus;
//         this.updateListeners();
//       }
//     }

//     /**
//      * Calls all listener functions with the current list of projects.
//      * Creates a copy of the projects array to prevent external mutations.
//      */
//     private updateListeners() {
//       for (const listenerFn of this.listeners) {
//         listenerFn(this.projects.slice());
//       }
//     }
//   }

//   /**
//    * Exported singleton instance of ProjectState.
//    * Ensures only one instance of ProjectState is used throughout the application.
//    */
//   export const projectState = ProjectState.getInstance();
// }

// USING ES MODULES
import { Project, ProjectStatus } from "../models/project";

// Project State Management

/**
 * Type for listener functions that handle arrays of items of type T.
 * @template T - The type of items the listener handles.
 */
type Listener<T> = (items: T[]) => void;

/**
 * Base class for managing state and notifying listeners.
 * @template T - The type of items in the state.
 */
class State<T> {
  /**
   * Array of listener functions that are called when the state changes.
   * @type {Listener<T>[]}
   */
  protected listeners: Listener<T>[] = [];

  /**
   * Adds a new listener function to the list.
   * @param {Listener<T>} listenerFn - The listener function to be added.
   */
  addListener(listenerFn: Listener<T>) {
    this.listeners.push(listenerFn);
  }
}

/**
 * Singleton class for managing project state.
 * Extends the State class and handles operations related to projects.
 */
export class ProjectState extends State<Project> {
  /**
   * Array of projects currently in the state.
   * @type {Project[]}
   */
  private projects: Project[] = [];

  /**
   * Static instance of ProjectState for singleton pattern.
   * @type {ProjectState}
   * @static
   */
  private static instance: ProjectState;

  /**
   * Private constructor to prevent direct instantiation.
   */
  private constructor() {
    super();
  }

  /**
   * Gets the singleton instance of ProjectState.
   * Creates a new instance if one does not already exist.
   * @returns {ProjectState} - The singleton instance of ProjectState.
   * @static
   */
  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new ProjectState();
    return this.instance;
  }

  /**
   * Adds a new project to the state.
   * Creates a new Project object and updates the state.
   * @param {string} title - The title of the project.
   * @param {string} description - The description of the project.
   * @param {number} numOfPeople - The number of people assigned to the project.
   */
  addProject(title: string, description: string, numOfPeople: number) {
    const newProject = new Project(
      Math.random().toString(), // Generates a unique ID for the project.
      title,
      description,
      numOfPeople,
      ProjectStatus.Active // Sets the initial status of the project.
    );
    this.projects.push(newProject); // Adds the new project to the state.
    this.updateListeners(); // Notifies listeners of the state change.
  }

  /**
   * Changes the status of a project.
   * @param {string} projectId - The ID of the project to update.
   * @param {ProjectStatus} newStatus - The new status to assign to the project.
   */
  moveProject(projectId: string, newStatus: ProjectStatus) {
    const project = this.projects.find((prj) => prj.id === projectId);
    if (project && project.status !== newStatus) {
      project.status = newStatus; // Updates the project's status.
      this.updateListeners(); // Notifies listeners of the state change.
    }
  }

  /**
   * Notifies all registered listeners of the current state.
   * Calls each listener function with a copy of the current projects array.
   * @private
   */
  private updateListeners() {
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice()); // Provides a copy of the projects array.
    }
  }
}

// Exporting the singleton instance of ProjectState for use in other modules.
export const projectState = ProjectState.getInstance();
