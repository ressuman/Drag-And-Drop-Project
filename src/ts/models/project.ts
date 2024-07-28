// USING NAMESPACES

// namespace App {
//   /**
//    * Enum to represent the status of a project.
//    * @enum {number}
//    */
//   export enum ProjectStatus {
//     Active, // 0
//     Finished, // 1
//   }

//   /**
//    * Class to represent a project.
//    */
//   export class Project {
//     /**
//      * Creates an instance of a Project.
//      * @param id - The unique identifier for the project.
//      * @param title - The title of the project.
//      * @param description - The description of the project.
//      * @param people - The number of people assigned to the project.
//      * @param status - The status of the project (Active or Finished).
//      */
//     constructor(
//       public id: string,
//       public title: string,
//       public description: string,
//       public people: number,
//       public status: ProjectStatus
//     ) {}
//   }
// }

// USING ES MODULES
/**
 * Enum representing the status of a project.
 * @enum {number}
 */
export enum ProjectStatus {
  /**
   * The project is currently active.
   * @type {number}
   */
  Active,

  /**
   * The project is finished.
   * @type {number}
   */
  Finished,
}

/**
 * Class representing a project.
 */
export class Project {
  /**
   * Creates an instance of Project.
   * @param {string} id - The unique identifier for the project.
   * @param {string} title - The title of the project.
   * @param {string} description - A detailed description of the project.
   * @param {number} people - The number of people assigned to the project.
   * @param {ProjectStatus} status - The current status of the project (active or finished).
   */
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectStatus
  ) {}
}
