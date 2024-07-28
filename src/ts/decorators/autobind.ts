// USING NAMESPACES

namespace App {
  /**
   * Autobind decorator to automatically bind the `this` context of a method.
   * This is useful for ensuring that methods have the correct `this` context when used as event handlers.
   *
   * @param _ - The prototype of the class.
   * @param _2 - The name of the method.
   * @param descriptor - The property descriptor of the method.
   * @returns {PropertyDescriptor} - A new property descriptor with the `this` context bound.
   */
  export function autobind(
    _: any,
    _2: string,
    descriptor: PropertyDescriptor
  ): PropertyDescriptor {
    // Store the original method.
    const originalMethod = descriptor.value;

    // Create an adjusted descriptor with a getter that returns the bound function.
    const adjDescriptor: PropertyDescriptor = {
      configurable: true,
      get() {
        // Bind the original method to the current instance (`this`).
        const boundFn = originalMethod.bind(this);
        return boundFn;
      },
    };

    // Return the adjusted descriptor.
    return adjDescriptor;
  }
}
