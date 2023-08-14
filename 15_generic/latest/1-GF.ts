// Generics in TypeScript allow you to create reusable components that can work with various types while maintaining type safety.

// They're often used to build functions, classes, or interfaces
// That can work with different types without sacrificing type checking.

// function swap<T>(a: T): T {
//   return a;
// }

// console.log(swap(100));
// console.log(swap("harshit"));

interface Person {
  name: string;
  age: number;
}

function printInfo<T extends Person>(data: T): void {
  console.log(data.name);
  console.log(data.age);
}

let ram: Person = {
  name: "Ram",
  age: 2000,
};

printInfo(ram);

let harshit = {
  name: "Harshit",
  age: 25,
  country: "india",
};

printInfo(harshit);
