var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorator factory example
function LogParameter1(message) {
    return function (target, key, index) {
        console.log("".concat(message, " - Parameter decorator executed"));
    };
}
var ExampleClass1 = /** @class */ (function () {
    function ExampleClass1() {
    }
    ExampleClass1.prototype.myMethod1 = function () {
        console.log("heyy hellow");
    };
    __decorate([
        LogParameter1("Logging parameter")
    ], ExampleClass1.prototype, "myMethod1");
    return ExampleClass1;
}());
// You can also create decorator factories to customize decorator behavior
// by accepting parameters.
var e1 = new ExampleClass1();
e1.myMethod1();
