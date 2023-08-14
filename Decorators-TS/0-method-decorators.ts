// Method decorator example
function MyMethodDecorator(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  console.log("Method decorator executed");
}

class ExampleClass {
  @MyMethodDecorator
  myMethod() {
    // Method logic
  }
}
