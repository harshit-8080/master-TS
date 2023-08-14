function MyPropertyDecorator(target: any, key: string) {
  const descriptor = Object.getOwnPropertyDescriptor(target, key);
  if (descriptor) {
    console.log("PropertyDescriptor for property:", descriptor);
  }
}

class ExampleClass3 {
  @MyPropertyDecorator
  myProperty: string = "Hello";
}

const instance1 = new ExampleClass3();
