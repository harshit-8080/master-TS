const add = (a: number, b: number): number => {
  let s = "harhit";
  return a + b;
};

console.log(add(10, 20));

const logger = (): void => {
  console.log("Logging in...");
};

const throwError = (message: string): never => {
  throw new Error(message);
};
