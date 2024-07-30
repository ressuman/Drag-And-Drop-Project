// USING NAMESPACES

// /// <reference path="components/project-input.ts" />
// /// <reference path="components/project-list.ts" />

// namespace App {
//   /**
//    * Initialize a new instance of ProjectInput.
//    * This is responsible for handling the input form for new projects.
//    */
//   new ProjectInput();

//   /**
//    * Initialize a new instance of ProjectList for active projects.
//    * @param status - The status of the projects to be listed, here it is "active".
//    */
//   new ProjectList("active");

//   /**
//    * Initialize a new instance of ProjectList for finished projects.
//    * @param status - The status of the projects to be listed, here it is "finished".
//    */
//   new ProjectList("finished");
// }

// USING ES MODULES
// Import the ProjectInput class from the project-input module.
import { ProjectInput } from "./components/project-input";
// Import the ProjectList class from the project-list module.
import { ProjectList } from "./components/project-list";
import "../styles/app.css";

// Instantiate a new ProjectInput object.
// This creates a form for inputting new projects.
new ProjectInput();

// Instantiate new ProjectList objects for the 'active' and 'finished' project categories.
// These will display lists of projects based on their status.
new ProjectList("active");
new ProjectList("finished");
