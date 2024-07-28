// USING NAMESPACES

namespace App {
  /**
   * Type alias for a listener function that takes an array of items of type T.
   * @template T - The type of items the listener function will handle.
   */
  type Listener<T> = (items: T[]) => void;

  /**
   * Base state class that manages listeners.
   * @template T - The type of items the state will manage.
   */
  class State<T> {
    // Array to store listener functions.
    protected listeners: Listener<T>[] = [];

    /**
     * Adds a listener function to the state.
     * @param listenerFn - The listener function to be added.
     */
    addListener(listenerFn: Listener<T>) {
      this.listeners.push(listenerFn);
    }
  }

  /**
   * Project state management class, extends the base State class.
   */
  export class ProjectState extends State<Project> {
    // Array to store projects.
    private projects: Project[] = [];
    // Singleton instance of ProjectState.
    private static instance: ProjectState;

    /**
     * Private constructor to prevent direct instantiation.
     */
    private constructor() {
      super();
    }

    /**
     * Returns the singleton instance of ProjectState, creating it if it doesn't exist.
     * @returns {ProjectState} - The singleton instance of ProjectState.
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
     * @param title - The title of the project.
     * @param description - The description of the project.
     * @param numOfPeople - The number of people assigned to the project.
     */
    addProject(title: string, description: string, numOfPeople: number) {
      const newProject = new Project(
        Math.random().toString(),
        title,
        description,
        numOfPeople,
        ProjectStatus.Active
      );
      this.projects.push(newProject);
      this.updateListeners();
    }

    /**
     * Moves a project to a new status.
     * @param projectId - The ID of the project to be moved.
     * @param newStatus - The new status of the project.
     */
    moveProject(projectId: string, newStatus: ProjectStatus) {
      const project = this.projects.find((prj) => prj.id === projectId);
      if (project && project.status !== newStatus) {
        project.status = newStatus;
        this.updateListeners();
      }
    }

    /**
     * Calls all listener functions with the current list of projects.
     * Creates a copy of the projects array to prevent external mutations.
     */
    private updateListeners() {
      for (const listenerFn of this.listeners) {
        listenerFn(this.projects.slice());
      }
    }
  }

  /**
   * Exported singleton instance of ProjectState.
   * Ensures only one instance of ProjectState is used throughout the application.
   */
  export const projectState = ProjectState.getInstance();
}
