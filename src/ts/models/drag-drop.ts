// USING NAMESPACES

// // Drag & Drop Interfaces
// namespace App {
//   /**
//    * Interface for draggable elements.
//    * These elements can be dragged, and they must implement the dragStartHandler and dragEndHandler methods.
//    */
//   export interface Draggable {
//     /**
//      * Handler for the drag start event.
//      * @param event - The drag event that is triggered when dragging starts.
//      */
//     dragStartHandler(event: DragEvent): void;

//     /**
//      * Handler for the drag end event.
//      * @param event - The drag event that is triggered when dragging ends.
//      */
//     dragEndHandler(event: DragEvent): void;
//   }

//   /**
//    * Interface for drag target elements.
//    * These elements can accept draggable elements, and they must implement the dragOverHandler, dropHandler, and dragLeaveHandler methods.
//    */
//   export interface DragTarget {
//     /**
//      * Handler for the drag over event.
//      * @param event - The drag event that is triggered when a draggable element is dragged over a valid drop target.
//      */
//     dragOverHandler(event: DragEvent): void;

//     /**
//      * Handler for the drop event.
//      * @param event - The drag event that is triggered when a draggable element is dropped on a valid drop target.
//      */
//     dropHandler(event: DragEvent): void;

//     /**
//      * Handler for the drag leave event.
//      * @param event - The drag event that is triggered when a draggable element leaves a valid drop target.
//      */
//     dragLeaveHandler(event: DragEvent): void;
//   }
// }

// USING ES MODULES
// Drag & Drop Interfaces

/**
 * Interface representing a draggable element.
 * The element that implements this interface must handle drag events.
 * @interface
 */
export interface Draggable {
  /**
   * Handles the drag start event.
   * This method is called when the drag operation starts.
   * @param {DragEvent} event - The drag event that triggered the handler.
   */
  dragStartHandler(event: DragEvent): void;

  /**
   * Handles the drag end event.
   * This method is called when the drag operation ends.
   * @param {DragEvent} event - The drag event that triggered the handler.
   */
  dragEndHandler(event: DragEvent): void;
}

/**
 * Interface representing a drag target.
 * The element that implements this interface must handle drag-and-drop events.
 * @interface
 */
export interface DragTarget {
  /**
   * Handles the drag over event.
   * This method is called when a draggable element is being dragged over the target.
   * @param {DragEvent} event - The drag event that triggered the handler.
   */
  dragOverHandler(event: DragEvent): void;

  /**
   * Handles the drop event.
   * This method is called when a draggable element is dropped onto the target.
   * @param {DragEvent} event - The drag event that triggered the handler.
   */
  dropHandler(event: DragEvent): void;

  /**
   * Handles the drag leave event.
   * This method is called when a draggable element leaves the target without being dropped.
   * @param {DragEvent} event - The drag event that triggered the handler.
   */
  dragLeaveHandler(event: DragEvent): void;
}
