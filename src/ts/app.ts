// USING NAMESPACES

/// <reference path="components/project-input.ts" />
/// <reference path="components/project-list.ts" />

namespace App {
  /**
   * Initialize a new instance of ProjectInput.
   * This is responsible for handling the input form for new projects.
   */
  new ProjectInput();

  /**
   * Initialize a new instance of ProjectList for active projects.
   * @param status - The status of the projects to be listed, here it is "active".
   */
  new ProjectList("active");

  /**
   * Initialize a new instance of ProjectList for finished projects.
   * @param status - The status of the projects to be listed, here it is "finished".
   */
  new ProjectList("finished");
}
