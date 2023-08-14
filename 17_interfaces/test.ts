interface Person {
  name: string;
  age: number;
  country: string;
}

interface Employee extends Person {
  EmId: number | string;
}

let arun: Employee = {
  name: "Arun",
  age: 40,
  country: "United",
  EmId: 100,
};

let harshit: Employee = {
  name: "Harshit",
  age: 40,
  country: "United",
  EmId: "x71",
};

console.log(arun);

console.log(harshit);
