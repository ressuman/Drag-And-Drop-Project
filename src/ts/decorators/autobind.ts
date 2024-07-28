// USING NAMESPACES

// namespace App {
//   /**
//    * Autobind decorator to automatically bind the `this` context of a method.
//    * This is useful for ensuring that methods have the correct `this` context when used as event handlers.
//    *
//    * @param _ - The prototype of the class.
//    * @param _2 - The name of the method.
//    * @param descriptor - The property descriptor of the method.
//    * @returns {PropertyDescriptor} - A new property descriptor with the `this` context bound.
//    */
//   export function autobind(
//     _: any,
//     _2: string,
//     descriptor: PropertyDescriptor
//   ): PropertyDescriptor {
//     // Store the original method.
//     const originalMethod = descriptor.value;

//     // Create an adjusted descriptor with a getter that returns the bound function.
//     const adjDescriptor: PropertyDescriptor = {
//       configurable: true,
//       get() {
//         // Bind the original method to the current instance (`this`).
//         const boundFn = originalMethod.bind(this);
//         return boundFn;
//       },
//     };

//     // Return the adjusted descriptor.
//     return adjDescriptor;
//   }
// }

// USING ES MODULES
// autobind decorator
/**
 * A decorator function that automatically binds the method to the class instance.
 * This is useful for ensuring that the method's `this` context remains correct
 * when the method is used as an event handler or callback function.
 *
 * @param {any} _ - The target object (not used in this implementation).
 * @param {string} _2 - The name of the method being decorated (not used in this implementation).
 * @param {PropertyDescriptor} descriptor - The property descriptor of the method being decorated.
 * @returns {PropertyDescriptor} - The modified property descriptor with the bound method.
 */
export function autobind(
  _: any,
  _2: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  // Stores the original method from the property descriptor.
  const originalMethod = descriptor.value;

  // Creates a new property descriptor with a getter that returns a bound version of the original method.
  const adjDescriptor: PropertyDescriptor = {
    configurable: true, // Allows the property descriptor to be changed or deleted.
    get() {
      // Binds the original method to the current class instance (`this`).
      const boundFn = originalMethod.bind(this);
      return boundFn; // Returns the bound method.
    },
  };

  // Returns the new property descriptor with the bound method.
  return adjDescriptor;
}
