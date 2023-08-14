// Generic Interfaces

// You can create generic interfaces to define contracts for objects
// That can work with multiple types:

interface Employee<T, U> {
  empId: T;
  userName: U;
  country?: string;
}

const e1: Employee<number, string> = {
  empId: 100,
  userName: "Harshit",
  country: "United States",
};

const e2: Employee<string, string> = {
  empId: "100",
  userName: "Harshit",
};

const e3: Employee<string, string[]> = {
  empId: "100",
  userName: ["g", "j", "futfg"],
};

console.log(e1, e2, e3);
