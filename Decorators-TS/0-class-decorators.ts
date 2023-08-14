// Class decorator example

function MyClassDecorator(constructor: Function) {
  console.log("Class decorator executed");
}

@MyClassDecorator
class MyClass {
  // Class members and methods
}
