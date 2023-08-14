// Decorator factory example
function LogParameter1(message: string) {
  return function (target: any, key: string, index: number) {
    console.log(`${message} - Parameter decorator executed`);
  };
}

class ExampleClass1 {
  @LogParameter1("Logging parameter")
  myMethod1() {
    console.log("heyy hellow");
  }
}

// You can also create decorator factories to customize decorator behavior
// by accepting parameters.

const e1 = new ExampleClass1();
e1.myMethod1();
