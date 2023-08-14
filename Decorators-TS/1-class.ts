class Boat {
  color: string = "black";

  @testDecorators
  pilot(): void {
    console.log("Hey From Pilot");
  }
}

/**
 *
 * @param target --> Boat.Prototype
 * @param key  --> Where we have applied the decorators to.
 * @param desc --> Property description.
 */

function testDecorators(target: any, key: string, desc: PropertyDescriptor) {
  console.log(target);
  console.log(key);
}
