// Generics in TypeScript allow you to create reusable components that can work with various types while maintaining type safety.
function printInfo(data) {
  console.log(data.name);
  console.log(data.age);
}
var ram = {
  name: "Ram",
  age: 2000,
};

printInfo(ram);
var harshit = {
  name: "Harshit",
  age: 25,
  country: "india",
};
printInfo(harshit);
