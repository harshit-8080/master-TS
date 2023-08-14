interface Person {
  name: string;
  age: number;
  country: string;
}

interface Employee extends Person {
  id: string;
  dept: string;
}

// const emp1: Employee = {};
