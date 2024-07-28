// USING NAMESPACES

// Drag & Drop Interfaces
namespace App {
  /**
   * Interface for draggable elements.
   * These elements can be dragged, and they must implement the dragStartHandler and dragEndHandler methods.
   */
  export interface Draggable {
    /**
     * Handler for the drag start event.
     * @param event - The drag event that is triggered when dragging starts.
     */
    dragStartHandler(event: DragEvent): void;

    /**
     * Handler for the drag end event.
     * @param event - The drag event that is triggered when dragging ends.
     */
    dragEndHandler(event: DragEvent): void;
  }

  /**
   * Interface for drag target elements.
   * These elements can accept draggable elements, and they must implement the dragOverHandler, dropHandler, and dragLeaveHandler methods.
   */
  export interface DragTarget {
    /**
     * Handler for the drag over event.
     * @param event - The drag event that is triggered when a draggable element is dragged over a valid drop target.
     */
    dragOverHandler(event: DragEvent): void;

    /**
     * Handler for the drop event.
     * @param event - The drag event that is triggered when a draggable element is dropped on a valid drop target.
     */
    dropHandler(event: DragEvent): void;

    /**
     * Handler for the drag leave event.
     * @param event - The drag event that is triggered when a draggable element leaves a valid drop target.
     */
    dragLeaveHandler(event: DragEvent): void;
  }
}
